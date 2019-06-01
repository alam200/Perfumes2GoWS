const httpStatus = require('http-status');
const { handler: errorHandler } = require('../middlewares/error');
const Product = require('../models/product');
const User = require('../models/user.model');
const Order = require('../models/order');
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
      count = await Product.find({ $and: [{ 'createdAt': { $gte: fromDate, $lte: toDate } }, filterOptions] }).find(searchOptions).countDocuments();
    } else {
      products = await Product.find(filterOptions).find(searchOptions).skip(index).limit(recordsPerPage)
        .sort(sortObject)
        .exec();
      count = await Product.find(filterOptions).find(searchOptions).countDocuments();
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
 * Get all the data 4 CSV export
 * @public
 */
exports.getExportData = async (req, res, next) => {
  try {
    const userId = req.query.userId;

    const user = await User.findById({ _id: userId }).exec();
    if (user.isVerified && user.category === 'Admin') {
      const products = await Product.find({}).exec();
      const customers = await User.find({ category: 'Customer' }).exec();
      const orders = await Order.find({}).exec();
      res.json({
        success: true,
        products: products,
        customers: customers,
        orders: orders
      });
    } else {
      // access denied
      res.json({
        success: false,
        products: null,
        customers: null,
        orders: null
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.getProductsForDownload = async (req, res, next) => {
  try {
    const userId = req.query.userId;

    const user = await User.findById({ _id: userId }).exec();
    if (user.isVerified && user.category === 'Customer') {
      const sortObject = {
        description: 'asc'
      };
      const products = await Product.find({ stock: { $gte: 3 } },{ "brand": 1,"type": 1,"SKU": 1,"description": 1,"price": 1,"stock": 1,"_id":0 }).sort(sortObject).exec();
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
 }

/**
 * Delete & Retreive Data
 * @public
 */
exports.retreiveDeleteData = async (req, res, next) => {
  try {
    const userId = req.query.userId;
    const collection = req.query.deleteCollection;

    const user = await User.findById({ _id: userId }).exec();
    let retreival = [];
    if (user.isVerified && user.category === 'Admin') {
      if (collection === 'products') {
        retreival = await Product.find({}).exec();
        // delete
        await Product.deleteMany({}).exec();
      } else if (collection === 'customers') {
        retreival = await User.find({ category: 'Customer' }).exec();
        // delete
        await User.deleteMany({ category: 'Customer' }).exec();
      } else if (collection === 'orders') {
        retreival = await Order.find({}).exec();
        // delete
        await Order.deleteMany({}).exec();
      }
      res.json({
        success: true,
        retreival: retreival
      });
    } else {
      // access denied
      res.json({
        success: false,
        retreival: retreival
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
    brands = brands.filter(element => element != null && element.trim() != '');
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
  try {
    await Product.findOneAndRemove({SKU : req.params.productCode}, function (err,Product){
      if(err) {
        return next(new Error('Todo was not found!'));
      }
      res.json('Successfully removed');
      
    });
  } catch (e) {
    console.log(e);
  }
  //Product.findByIdAndRemove(req.params.productCode)
  //  .then(() => res.status(httpStatus.NO_CONTENT).end(), res.json('Product removed successfully'))
  //  .catch(e => next(e));
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

//For MS-DOS format CSV file
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

      if (req.file.originalname.split('.')[req.file.originalname.split('.').length - 1] === 'xlsx') {
        exceltojson = xlsxtojson;
      } else {
        exceltojson = xlstojson;
      }
      /** Check the extension of the incoming file and
       *  use the appropriate module
       */
      var path = require("path");
      var csv_path = path.resolve("./") + "\\" + req.file.filename;
      const csv=require('csvtojson')
      //add from csv file
      csv()
      .fromFile(csv_path)
      .then((jsonObj)=>{
          let productList = [];          
          async function DeleteFun(){
            let del =  await Product.deleteMany({}).exec();
          }
          console.log();
          console.log(jsonObj);
          if(jsonObj.length == 0 ) {
          let isCsvFormat = true;
          } else {
            if (jsonObj[0].SKU == undefined || jsonObj[0].createdAt == undefined) {
              res.json({ error_code: 1, err_desc: { code: 9300 } });
            } else {
              DeleteFun(); 
              try {
                for (let i = 0; i < jsonObj.length; i++) {
                  if(jsonObj[i]._id === '') {
                    var ObjectID = require('mongodb').ObjectID
                    var objectId = new ObjectID();
                    product_item = {
                      category : (jsonObj[i].category == '')? 'normal' : jsonObj[i].category ,
                      productStatus : (jsonObj[i].productStatus == '')? 'deactive' : jsonObj[i].productStatus,
                      _id : objectId,
                      image : (jsonObj[i].image == '')? '/assets/product_placeholder.png' : jsonObj[i].image,
                      price : (jsonObj[i].price == '')? '0' : jsonObj[i].price,
                      SKU : (jsonObj[i].SKU == '')? '0' : jsonObj[i].SKU,
                      productCode : (jsonObj[i].productCode == '')? jsonObj[i].SKU : jsonObj[i].productCode,
                      type : (jsonObj[i].type == '')? null : jsonObj[i].type,
                      description : (jsonObj[i].description == '')? null : jsonObj[i].description,
                      brand : (jsonObj[i].brand == '')? null : jsonObj[i].brand,
                      stock : (jsonObj[i].stock == '')? '0' : jsonObj[i].stock,
                      __v : (jsonObj[i].__v == '')? '0' : jsonObj[i].__v,
                      createdAt : (jsonObj[i].createdAt == '')? '0000-00-00 00:00:00' : jsonObj[i].createdAt,
                      updatedAt : (jsonObj[i].updatedAt == '')? '0000-00-00 00:00:00' : jsonObj[i].updatedAt
                     }
                  } else {
                     product_item = {
                      category : (jsonObj[i].category == '')? 'normal' : jsonObj[i].category ,
                      productStatus : (jsonObj[i].productStatus == '')? 'deactive' : jsonObj[i].productStatus,
                      _id : jsonObj[i]._id,
                      image : (jsonObj[i].image == '')? '/assets/product_placeholder.png' : jsonObj[i].image,
                      price : (jsonObj[i].price == '')? '0' : jsonObj[i].price,
                      SKU : (jsonObj[i].SKU == '')? '0' : jsonObj[i].SKU,
                      productCode : (jsonObj[i].productCode == '')? jsonObj[i].SKU : jsonObj[i].productCode,
                      type : (jsonObj[i].type == '')? null : jsonObj[i].type,
                      description : (jsonObj[i].description == '')? null : jsonObj[i].description,
                      brand : (jsonObj[i].brand == '')? null : jsonObj[i].brand,
                      stock : (jsonObj[i].stock == '')? '0' : jsonObj[i].stock,
                      __v : (jsonObj[i].__v == '')? '0' : jsonObj[i].__v,
                      createdAt : (jsonObj[i].createdAt == '')? '2019-04-16T22:40:48.767Z' : jsonObj[i].createdAt,
                      updatedAt : (jsonObj[i].updatedAt == '')? '2019-04-16T22:40:48.767Z' : jsonObj[i].updatedAt
                     }
                  }
                  productList.push(product_item);
                }
                try {
                  Product.insertMany(productList, (err, res) => {
                    if (err) throw err;
                    });
                    res.json({ error_code: 0, err_desc: { code: 9200 }, data: "Data inserted into database successfully" });
                }catch(e) {
                    print(e);
                }
              } catch (e)
              {
                print(e)
              }            
            }
          }
        })
      });
  } catch (e) {
    next(e);
  }
}
//For Excel File
/*
exports.uploadProducts = async (req, res, next) => {
  try {
    upload(req, res, function (err) {
      if (err) {
        res.json({ error_code: 1, err_desc: err });
        return;
      }
      // Multer gives us file info in req.file object 
      if (!req.file) {
        res.json({ error_code: 1, err_desc: "No file passed" });
        return;
      }
      // Check the extension of the incoming file and
      //  use the appropriate module
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
          async function DeleteFun(){
            let delte =  await Product.deleteMany({}).exec();
          }
          DeleteFun();
          Product.insertMany(result, (err, data) => {
            if (err) {
              return res.json({ error_code: 1, err_desc: err, data: null });
            }
            res.json({ error_code: 0, err_desc: { code: 9200 }, data: "Data inserted into database successfully" });
          })
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
*/
