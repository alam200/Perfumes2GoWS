const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const httpStatus = require('http-status');
const APIError = require('../utils/APIError');
const fs = require('fs');

const productSchema = new Schema({
  brand: String,
  type: String,
  category: {
    type: String,
    default: 'normal'
  },
  SKU: {
    type: String,
    required: true,
    unique: true
  },
  productCode: {
    type: String,
    unique: true,
    sparse: true
  },
  stock: Number,
  description: String,
  price: Number,
  productStatus: {
    type: String,
    default: 'active'
  },
  image: {
    type: String,
    default: '/products/product_placeholder.png'
  },
  vendorid: {
    type: String
  }
}, {
  timestamps: true
});

/**
 * Statics
 */
productSchema.statics = {
  /**
   * Get Product
   *
   * @param {ObjectId} id - The objectId of product.
   * @returns {Promise<Product, APIError>}
   */
  async get(productCode) {
    try {
      const product = await this.find({ SKU: productCode }).exec();
      if (product.length > 0) {
        return product[0];
      }
      throw new APIError({
        message: 'Product does not exist',
        status: httpStatus.NOT_FOUND
      });
    } catch (error) {
      throw error;
    }
  },

  // save Product images
  saveProductImage(req) {
    if (req.body.imageBase64) {
      // If imageBase64 is passed mean create/update image
      let oldImage = req.body.image;
      var path = require("path");
      const base64Image = req.body.imageBase64.split(';base64,').pop();
      const timeInMillis = new Date().getTime();
      const productImageUrl_dist = path.resolve("./") + '/dist/products/' + timeInMillis + '.png';
      const productImageUrl = './src/products/' + timeInMillis + '.png';
      const database_inserturl = '/products/' + timeInMillis + '.png';
      const productImageName = productImageUrl;
      fs.writeFileSync(productImageName, base64Image, { encoding: 'base64' });
      fs.writeFileSync(productImageUrl_dist, base64Image, { encoding: 'base64' });

      // Delete already exist image for this product
      if(oldImage == undefined) {} else {
        if (oldImage !== '/products/product_placeholder.png') {
          fs.unlink(oldImage, (err) => {
            if (err) {
            }
          });
        }  
      }
      return database_inserturl;
    } else if (req.body.image && req.body.image !== '/products/product_placeholder.png') {
      // if imageBase64 not passed but image exist but not default image, then just return that as it is
      return req.body.image;
    }
    // other wise return default image path
    return '/assets/product_placeholder.png';
  }
};

module.exports = mongoose.model('product', productSchema);
