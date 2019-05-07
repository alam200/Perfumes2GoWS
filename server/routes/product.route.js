const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const controller = require('../controllers/product.controller');
const { authorize, ADMIN } = require('../middlewares/auth');
/**
 * Load product when API with productCode route parameter is hit
 */
router.param('productCode', controller.load)

router
  .route('/')
  /**
   * @api {get} api/products | List Products
   */
  .get(controller.list)
  /**
   * @api {post} api/products | Create Product
   */
  .post(authorize(), controller.create);

router
  .route('/:productCode')
   /**
   * @api {patch} api/products/:productCode | Update Product
   */
  .patch(authorize(), controller.update)
   /**
   * @api {delete} api/products/:productCode | Delete Product
   */
  .delete(authorize(), controller.remove);

router
  .route('/details/:productCode')
  /**
   * @api {get} api/products/:productCode | Get Product Details
   */
  .get(authorize(), controller.get);

router
  .route('/isProductCodeExists/:productCode')
  /**
   * @api {get} api/products/isProductCodeExists/:productCode 
   */
  .get(authorize(), controller.isProductCodeExists);

router
  .route('/all')
  /**
   * @api {get} api/products/all | Get All the Products 4 CSV
   */
  .get(controller.getProductsAll);

router
  .route('/brands')
  /**
   * @api {get} api/products/brands | Get Product's Brands List
   */
  .get(controller.getBrands);

router
  .route('/types')
  /**
   * @api {get} api/products/types | Get Product's Types List
   */
  .get(controller.getTypes);

router
  .route('/sku')
  /**
   * @api {get} api/products/sku | Get Product's Types List
   */
  .get(controller.getSKUList);

router
  .route('/upload')
  /**
   * @api {post} api/products/upload
   */
  .post(controller.uploadProducts);

module.exports = router;
