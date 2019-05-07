const httpStatus = require('http-status');
const { handler: errorHandler } = require('../middlewares/error');
const Product = require('../models/product');
const User = require('../models/user.model');
const multer = require('multer');
const xlstojson = require("xls-to-json-lc");
const xlsxtojson = require("xlsx-to-json-lc");

/**
 * Create new Categories
 * @public
 */
exports.create = async (req, res, next) => {
  const product = new Product(req.body);
  try {
    product.image = Product.saveProductImage(req);
    const savedProduct = await product.save();
    res.status(httpStatus.OK);
    res.json(savedProduct);
  } catch (e) {
    next(e);
  }
};

/**
* Update existing product
* @public
*/
exports.update = (req, res, next) => {
  const image = Product.saveProductImage(req);
  let product = Object.assign(req.locals.product, req.body);
  product.image = image;
  try {
    product.save()
      .then(savedProduct => res.json(savedProduct))
      .catch(e => next(e));
  } catch (e) {
    next(e);
  }
};

/**
 * Get product list | DEPRECATED ?
 * @public
 */
exports.list = async (req, res, next) => {
  try {
    const recordsPerPage = 50;

    const products = await Product.find({}).limit(recordsPerPage);
    // res.json(products);

    const count = await Product.find({}).count();
    res.json({
      productList: products,
      totalProducts: count
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get Product details
 * @public
 */
exports.get = async (req, res, next) => {
  try {
    res.json(req.locals.product);
  } catch (error) {
    next(error);
  }
};


/**
 * Check whether ProductCode already exists
 * @public
 */
exports.isProductCodeExists = async (req, res, next) => {
  try {
    let product = await Product.find({productCode: req.query.productCode})[0];
    if (product) {
      res.json({'isProductCodeExists': true});
    } else {
      res.json({'isProductCodeExists': false});
    }
   } catch (error) {
    next(error);
  }
};

/**
 * Get product list
 * @public
 */
exports.list = async (req, res, next) => {
  try {
    let index = Number.parseInt(req.query.pageNo, 10) - 1;
    let recordsPerPage = Number.parseInt(req.query.recordsPerPage);
    const searchText = req.query.searchText;
    const brand = req.query.brand;
    const type = req.query.type;
    const listType = req.query.productListType;
    const userCategory = req.query.userCategory;

    /** exception handler */
    if (isNaN(index)) index = 0;
    if (isNaN(recordsPerPage)) recordsPerPage = 50;

    let filterOptions = {};

    if (brand && brand.toUpperCase() != 'ALL') {
      filterOptions['brand'] = brand;
    }
    if (type && type.toUpperCase() != 'ALL') {
      filterOptions['type'] = type;
    }
    if (listType && listType.toUpperCase() === 'SPECIAL') {
      filterOptions['category'] = listType;
    }
    if (userCategory && userCategory.toUpperCase() === 'CUSTOMER') {
      filterOptions['productStatus'] = 'active';
    }

    /**User can search based on following option by inputing in search box available on product
     * list page
     */
    let searchOptions = {};
    if (searchText && searchText.trim().length > 0) {
      searchOptions = {
        $or: [
          { brand: { $regex: '.*' + searchText + '.*', $options: 'i' } },
          { type: { $regex: '.*' + searchText + '.*', $options: 'i' } },
          { SKU: { $regex: '.*' + searchText + '.*', $options: 'i' } },
          { productCode: { $regex: '.*' + searchText + '.*', $options: 'i' } },
          // { stock: { $regex: '.*' + searchText + '.*', $options: 'i' } },
          { description: { $regex: '.*' + searchText + '.*', $options: 'i' } },
          // { price: { $regex: '.*' + searchText + '.*', $options: 'i' } }
        ]
      }
    }

    var sortObject = {};
    var sType = req.query.column;
    var sdir = req.query.sdir;
    if (sType && sdir) {
      // avoid adding 'undefined'
      sortObject[sType] = sdir;
    }

    if (sType === 'brand') {
      sortObject['description'] = 'asc';
    }
    /** exception handler */
    if (!Object.keys(sortObject).length && sortObject.constructor === Object) {
      sortObject = {
        brand: 'asc',
        description: 'asc'
      };
    }
    let products;
    let count = 0;
    /**In case of 'New Products' request get products whilch are added within last 7 days*/
    if (listType && listType.toUpperCase() === 'NEW') {
      let fromDate = new Date();
      const toDate = new Date();
      fromDate = new Date(fromDate.setDate(fromDate.getDate() - 7));

      products = await Product.find({ $and: [{ 'createdAt': { $gte: fromDate, $lte: toDate } }, filterOptions] }).find(searchOptions).skip(index).limit(recordsPerPage)
        .sort(sortObject)
        .exec();
      count = await Product.find(filterOptions).find(searchOptions).count();
    } else {
      products = await Product.find(filterOptions).find(searchOptions).skip(index).limit(recordsPerPage)
        .sort(sortObject)
        .exec();
      count = await Product.find(filterOptions).find(searchOptions).count();
    }

    res.json({
      productList: products,
      totalProducts: count
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get all the products
 * @public
 */
exports.getProductsAll = async (req, res, next) => {
  try {
    const userId = req.query.userId;

    const user = await User.findById({ _id: userId }).exec();
    if (user.isVerified && user.category === 'Admin') {
      const products = await Product.find({}).exec();
      res.json({
        success: true,
        products: products
      });
    } else {
      // access denied
      res.json({
        success: false,
        products: null
      });
    }
  } catch (error) {
    next(error);
  }
};

/**
 * Get brand list
 * @public
 */
exports.getBrands = async (req, res, next) => {
  try {
    let brands = await Product.distinct('brand').distinct();
    brands = brands.filter(element => element !=null && element.trim() != '');
    res.json(brands.sort());
  } catch (error) {
    next(error);
  }
};

/**
 * Get product code
 * @public
 */
exports.getSKUList = async (req, res, next) => {
  try {
    let productCodes = await Product.distinct('SKU').distinct();
    productCodes = productCodes.filter(element => element !=null && element.trim() != '');
    res.json(productCodes.sort());
  } catch (error) {
    next(error);
  }
};

/**
 * Get type list
 * @public
 */
exports.getTypes = async (req, res, next) => {
  try {
    let types = await Product.distinct('type').distinct();
    types = types.filter(element => element !=null && element.trim() != '');
    res.json(types.sort());
  } catch (error) {
    next(error);
  }
};

/**
 * Load Product and append to req.
 * @public
 */
exports.load = async (req, res, next, productCode) => {
    try {
    const product = await Product.get(productCode);
    req.locals = { product };
    return next();
  } catch (error) {
    return errorHandler(error, req, res);
  }
};

/**
 * Delete Product
 * @public
 */
exports.remove = async (req, res, next) => {
  Product.findByIdAndRemove(req.params.productCode)
    .then(() => res.status(httpStatus.NO_CONTENT).end(), res.json('Product removed successfully'))
    .catch(e => next(e));
};

const storage = multer.diskStorage({ //multers disk storage settings
  destination: function (req, file, cb) {
    cb(null, './')
  },
  filename: function (req, file, cb) {
    var datetimestamp = Date.now();
    cb(null, 'ProductList.' + file.originalname.split('.')[file.originalname.split('.').length - 1])
  }
});
const upload = multer({ //multer settings
  storage: storage,
  // fileFilter : function(req, file, callback) { //file filter
  //   if (['xls', 'xlsx'].indexOf(file.originalname.split('.')[file.originalname.split('.').length-1]) === -1) {
  //       return callback(new Error('Wrong extension type'));
  //   }
  //   callback(null, true);
  // }
}).single('file');

exports.uploadProducts = async (req, res, next) => {
  try {
    upload(req, res, function (err) {
      if (err) {
        res.json({ error_code: 1, err_desc: err });
        return;
      }
      /** Multer gives us file info in req.file object */
      if (!req.file) {
        res.json({ error_code: 1, err_desc: "No file passed" });
        return;
      }
      /** Check the extension of the incoming file and
       *  use the appropriate module
       */
      if (req.file.originalname.split('.')[req.file.originalname.split('.').length - 1] === 'xlsx') {
        exceltojson = xlsxtojson;
      } else {
        exceltojson = xlstojson;
      }
      try {
        exceltojson({
          input: req.file.path,
          output: null, //since we don't need output.json
          lowerCaseHeaders: false
        }, function (err, result) {
          if (err) {
            return res.json({ error_code: 1, err_desc: err, data: null });
          }
          //res.json({error_code:0,err_desc:null, data: result});
          Product.insertMany(result, (err, data) => {
            if (err) {
              return res.json({ error_code: 1, err_desc: err, data: null });
            }
            res.json({ error_code: 0, err_desc: { code: 9200 }, data: "Data inserted into database successfully" });
          })
        });
      } catch (e) {
        res.json({ error_code: 1, err_desc: { code: 9300 } });
      }
    });
  } catch (e) {
    next(e);
  }
};
