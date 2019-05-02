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
   * @api {get} api/products List Products
   */
  .get(controller.list)

  /**
   * @api {post} api/products Create Product
   */
  .post(authorize(), controller.create);

  router
  .route('/:productCode')


   /**
   * @api {patch} api/products/:productCode Update Product
   */
  .patch(authorize(), controller.update)

   /**
   * @api {delete} api/products/productCode    Delete Product
   */
  .delete(authorize(), controller.remove);


  router
  .route('/details/:productCode')

  /**
   * @api {get} api/products/:productCode Get Product Details
   */
  .get(authorize(), controller.get)

  router
  .route('/isProductCodeExists/:productCode')

  /**
   * @api {get} api/products/isProductCodeExists/:productCode 
   */
  .get(authorize(), controller.isProductCodeExists)

  /**
   * @api {get} api/products/brands Get Product's Brands List
   * */
  router
  .route('/brands')
  .get( controller.getBrands)

  /**
   * @api {get} api/products/types Get Product's Types List
   * */
  router
  .route('/types')
  .get( controller.getTypes)

  /**
   * @api {get} api/products/sku Get Product's Types List
   * */
  router
  .route('/sku')
  .get(controller.getSKUList)

  router
  .route('/upload')
  .post(controller.uploadProducts);

module.exports = router;
