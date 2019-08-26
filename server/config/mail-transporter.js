const nodemailer = require("nodemailer");

const smtpTransport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "perfumes2gows@gmail.com",
    pass: "Alhambra11"
  }
});

let mailOptions = {
  from: '"Perfumes2Go" <perfumes2gows@gmail.com>', // sender address
  to: '', // list of receivers
  subject: '', // Subject line
  text: '',
  html: ''
};

exports.mailToAdmin = function sendMailToAdmin(user, orderNo, address, orderItems) {

  const html = adminEmailTemplate(user, address, orderItems);
  mailOptions.to = 'Perfumes2Go <fragrancedeals@yahoo.com>, Perfumes2Go <alam200@gmail.com.com>, Perfumes2Go <perfumes2gollc@gmail.com>'
  mailOptions.subject = "New Order #" + orderNo
  mailOptions.html = html;

  smtpTransport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });
}


function adminEmailTemplate(user, address, orderItems) {
  let html = ''
  let grandTotal = 0;
  orderItems.forEach(item => {
    html = html.concat('<tr>'
      + '<td align="center" width="100"> ' + item.quantity + '</td>'
      + '<td align="center" width="100"> ' + item.product.productCode + '</td>'
      + '<td align="center" width="100"> ' + item.product.type + '</td>'
      + '<td align="center" width="400"> ' + item.product.description + '</td>'
      + '<td align="center" width="100">' + item.product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) + '</td>'
      + '<td align="center" width="260">' + item.subTotal.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) + '</td></tr>')
    grandTotal = grandTotal + item.subTotal;
  });

  html = html.concat('<tr>'
    + '<td align="center" width="100"></td>'
    + '<td align="center" width="200"></td>'
    + '<td align="center" width="200"></td>'
    + '<td align="center" width="300"></td>'
    + '<td align="center" width="100"></td>'
    + '<td align="center" width="200"><b><span style="font-weight:bold">Total: ' + grandTotal.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) + '</span></td></tr>')


  const htmlTable = '<html><body style="margin:0; padding:10px 0 0 0;" bgcolor="#F8F8F8"><span>Hello Perfumes2Go,</span><br>' +
    '<div>New order to process<br>' +
    '<div><h2>Customer</h2>' +
    '<div><span style="font-weight:bold">Name: </span>' + user.firstName + ' ' + user.lastName + '</div>' +
    '<div><span style="font-weight:bold">Company: </span>' + user.companyName + '</div>' +
    '<div><span style="font-weight:bold">Email: </span>' + user.email + '</div></div> &nbsp;' +
    '<div><span style="font-weight:bold">Shipping Address:</span>' +
    '<div><span style="font-weight:bold">Street: </span>' + address.addressLine2 + '</div>' +
    '<div><span style="font-weight:bold">City: </span>' + address.city + '</div>' +
    '<div><span style="font-weight:bold">Country: </span>' + address.country + '</div></div>&nbsp;' +
    '<div><span style="font-weight:bold">Order Details: </span>' +
    '<table align="center" border="1" cellpadding="0" cellspacing="0" width="95%">' +
    '<thead><tr>'
    + '<th align="center" width="100">Quantity</th>'
    + '<th align="center" width="200">Product Code</th>'
    + '<th align="center" width="200">Product Type</th>'
    + '<th align="center" width="300">Product</th>'
    + '<th align="center" width="100">Price</th>'
    + '<th align="center" width="200">Subtotal</th>'
    + '</tr></thead>'
    + '<tbody>' + html + '</tbody></table></div><br>'
    + 'Perfumes2Go</body></html>'

  return htmlTable;
}









