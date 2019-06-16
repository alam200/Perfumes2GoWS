const httpStatus = require('http-status');
const Order = require('../models/order');
const Product = require('../models/product');
const { handler: errorHandler } = require('../middlewares/error');
const User = require('../models/user.model');
const Address = require('../models/address');
const nodemailer = require('nodemailer');
const mail = require('../config/mail-transporter')

function sendOrderEmail(customerEmail, htmlTamp, orderNumber) {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: "perfumes2gows@gmail.com",
      pass: "Alhambra11"
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Perfumes2Go" <perfumes2gows@gmail.com>', // sender address
    to: customerEmail, // list of receivers
    subject: 'Order ' + orderNumber, // Subject line
    text: '',
    html: htmlTamp
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });
}

function getProductUpdateAction(oldStatus, newStatus) {
  const increase = 'Increase';
  const decrease = 'Decrease'
  const none = 'None';
  switch (oldStatus) {
    case 'Pending':
      if (newStatus === 'Pending') {// Order created
        return decrease;
      } else if (newStatus === 'Cancelled') {
        return increase;
      } else {
        return none;
      }
    case 'In Progress':
    case 'Dispatched':
    case 'Delivered':
      if (newStatus === 'Cancelled') {
        return increase;
      } else {
        return none;
      }
    case 'Cancelled':
      if (newStatus === 'Pending' || newStatus === 'In Progress' || newStatus === 'Dispatched' || newStatus === 'Delivered') {
        return decrease;
      } else {
        return none;
      }

  }
}

async function updateProductsStock(orderItems, oldStatus, newStatus) {
  for (let index = 0; index < orderItems.length; index++) {

    const product = await Product.get(orderItems[index].SKU);
    if (getProductUpdateAction(oldStatus, newStatus) === 'Decrease') {
      product.stock = Number.parseInt(product.stock) - orderItems[index].quantity;
    } else if (getProductUpdateAction(oldStatus, newStatus) === 'Increase') {
      product.stock = Number.parseInt(product.stock) + orderItems[index].quantity;
    }

    try {
      product.save()
        .then(savedProduct => {
          console.log("product saved success");
        })
        .catch(e => console.log("product error", e));
    } catch (e) {
      console.log("product exception", e);
    }
  }
}

/**
 * Load Order and append to req.
 * @public
 */
exports.load = async (req, res, next, orderId) => {
  try {
    const order = await Order.get(orderId);
    req.locals = { order };
    return next();
  } catch (error) {
    return errorHandler(error, req, res);
  }
};

/**
 * Get Order
 * @public
 */
exports.get = async (req, res, next) => {
  try {
    const orders = await Order
      .find({ _id: req.params.orderId })
      .populate('customerId', 'firstName lastName email companyName phoneNumber mobileNumber')
      .populate('addressId')
      .populate('orderItems.productId')
      .exec();
    res.json(orders[0]);
  } catch (error) {
    next(error);
  }
};

/**
 * Create new Order
 * @public
 */
exports.create = async (req, res, next) => {
  let productList = [];
  try {
    const order = new Order(req.body);
    const orderNo = await Order.generateOrderId();
    order.orderNo = orderNo;
    const savedOrder = await order.save();
    updateProductsStock(order.orderItems, 'Pending', req.body.orderStatus);
    for (let i = 0; i < order.orderItems.length; i++) {
      const product = await Product.get(order.orderItems[i].SKU);
      orderItem = {
        quantity: order.orderItems[i].quantity,
        orderNumber: orderNo,
        product: product,
        subTotal: +order.orderItems[i].quantity * product.price
      }
      productList.push(orderItem)
    }

    const user = await User.get(req.body.customerId);
    const address = await Address.get(req.body.addressId);
    const html = createHtmlTemplate(user, address, productList);
    // sent a mail
    sendOrderEmail(user.email, html, orderNo)

    // email to admin
    //mail.mailToAdmin(user, orderNo, address, productList);
    res.status(httpStatus.CREATED);
    res.json(savedOrder);
  } catch (error) {
    next(error);
  }
};


/**
 * Update existing Order
 * @public
 */
exports.update = async (req, res, next) => {
  const previousStatus = req.locals.order.orderStatus;
  const order = Object.assign(req.locals.order, req.body);

  try {
    updateProductsStock(order.orderItems, previousStatus, req.body.orderStatus);
    const savedOrder = await order.save();
    res.status(httpStatus.OK);
    res.json(savedOrder);
  } catch (error) {
    next(error);
  }
};

/**
* Get order list
* @public
*/
exports.list = async (req, res, next) => {
  try {
    const fromDate = new Date(req.query.fromDate);
    let toDate = new Date(req.query.toDate);

    toDate = new Date(toDate.setDate(toDate.getDate() + 1));

    const orderStatus = req.query.orderStatus;

    let filterOptions = {};
    if (orderStatus && orderStatus.toUpperCase() != 'ALL') {
      filterOptions['orderStatus'] = orderStatus;
    }
    let orders = await Order
      .find({ $and: [{ 'createdAt': { $gte: fromDate, $lt: toDate } }, filterOptions] })
      .populate('customerId', 'firstName lastName')
      .populate('orderItems.productId', 'brand type price')
      .exec();
    res.json(orders);
  } catch (error) {
    next(error);
  }
};

/**
 * Delete Order
 * @public
 */
exports.remove = (req, res, next) => {
  const { order } = req.locals;
  order.remove()
    .then(() => res.status(httpStatus.NO_CONTENT).end())
    .catch(e => next(e));
};

function createHtmlTemplate(user, address, orderItems) {
  let html = ''
  let grandTotal = 0;
  orderItems.forEach(item => {
    html = html.concat('<tr>'
      + '<td align="center"> ' + item.quantity + '</td>'
      + '<td align="center"> ' + item.product.productCode + '</td>'
      + '<td>' + item.product.type + '</td>'
      + '<td>' + item.product.description + '</td>'
      + '<td align="right">' + item.product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) + '</td>'
      + '<td align="right">' + item.subTotal.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) + '</td></tr>')
    grandTotal = grandTotal + item.subTotal;
  });
  html = html.concat('<tr>'
    + '<td align="center"></td>'
    + '<td align="center"></td>'
    + '<td align="center"></td>'
    + '<td align="center"></td>'
    + '<td align="center"></td>'
    + '<td align="center"><b><span style="font-weight:bold">Total: ' + grandTotal.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) + '</span></td></tr>')

  const htmlTable = '<html><body style="margin:0; padding:5px 0 0 0;" bgcolor="#F8F8F8"><span>Hello ' + user.firstName + ' ' + user.lastName + ',</span><br>' +
    '<span>Thank you for your order, we will process your order as soon as possible.</span>' +
    '<div style="display: flex"><div style="width: 50%;"><div style="margin: 20px 0px;font-size: 1.5rem;"><b>Customer</b></div>'+
      '<div><span style="font-weight:bold">Name: </span>' + user.firstName + ' ' + user.lastName + '</div>'+
      '<div><span style="font-weight:bold">Company: </span>' + user.companyName + '</div>' +
      '<div><span style="font-weight:bold">Email: </span>' + user.email + '</div>' +
      '<div><span style="font-weight:bold">Phone: </span>' + user.phoneNumber + '</div>' +
      '<div><span style="font-weight:bold">Mobile: </span>' + user.mobileNumber + '</div></div>' +
    '<div style="top: 68px; position: relative; left: 20%;"><br /><br /><br /><br />' +
      '<span style="font-weight:bold">Shipping Address:</span>' +
      '<div><span style="font-weight:bold">Street: </span>' + address.addressLine2 + '</div>' +
      '<div><span style="font-weight:bold">City: </span>' + address.city + '</div>' +
      '<div><span style="font-weight:bold">Country: </span>' + address.country + '</div></div></div><br />' +
    '<div><span style="font-weight:bold">Order Details: </span>' +
    '<table align="center" border="1" cellpadding="0" cellspacing="0" width="90%" style="position: relative; left: -5%;">' +
    '<thead><tr>'
    + '<th align="center" width="50">Q</th>'
    + '<th align="center" width="70">PC</th>'
    + '<th align="center" width="130">PT</th>'
    + '<th align="center" width="400">Product</th>'
    + '<th align="center" width="60">Price</th>'
    + '<th align="center" width="100">Subtotal</th>'
    + '</tr></thead>'
    + '<tbody>' + html + '</tbody></table></div><br>'
    + 'Thank you for choosing,<br> Perfumes2Go</body></html>'

  return htmlTable;
}








