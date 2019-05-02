const express = require('express');
const validate = require('express-validation');
const controller = require('../controllers/order.controller');
const { authorize, ADMIN, LOGGED_USER } = require('../middlewares/auth');
const {
  listOrder,
  createOrder,
  replaceOrder,
  updateOrder,
} = require('../validations/order.validation');

const router = express.Router();

/**
 * Load order when API with orderId route parameter is hit
 */
router.param('orderId', controller.load);

router
  .route('/')
  /**
   * @api {get} v1/orders List Order
   * @apiDescription Get a list of order
   * @apiVersion 1.0.0
   * @apiName ListOrder
   * @apiGroup Order
   * @apiPermission admin
   *
   * @apiHeader {String} Athorization  User's access token
   * @apiParam  {String} [restaurantId]      Required to get orders of a particular restaurant      
   * @apiSuccess {Object[]} order List of order.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(validate(listOrder), controller.list)
  
/**
   * @api {post} v1/orders Create Order
   * @apiDescription Create a new Order
   * @apiVersion 1.0.0
   * @apiName Order
   * @apiGroup Order
   * @apiPermission admin
   *
   * @apiHeader {String} Athorization  User's access token
   * 
   * @apiParam  {String}             customerId             Customer Id
   * @apiParam  {String}             restaurantId           Restaurant Id 
   * @apiParam  {Number}             orderAmount            Order Amount
   * @apiParam  {Array}              orderItems             Items Order
     @apiParam  {String}             paymentMethod          Payment Mode [COD, CARD]
   * @apiParam  {String}             paymentStatus          Payment Status [Successful, Failed]
   * @apiParam  {String}             orderStatus            Order Status [Pending, InProgress, 
   *                                                        Dispatched, Delivered, Cancelled]
   * 
   * @apiSuccess (Created 201) {Date}    createdAt        Timestamp
   *
   * @apiError (Bad Request 400)   ValidationError  Some parameters may contain invalid values
   * @apiError (Unauthorized 401)  Unauthorized     Only authenticated users can create the data
   * @apiError (Forbidden 403)     Forbidden        Only admins can create the data
   */
  .post(validate(createOrder), controller.create);

  router
  .route('/:orderId')
  /**
   * @api {get} v1/order/:orderId Get Order
   * @apiDescription Get order information
   * @apiVersion 1.0.0
   * @apiName GetOrder
   * @apiGroup Order
   * @apiPermission admin
   *
   * @apiHeader {String} Athorization  User's access token
   * 
   * @apiParam  {String}             orderId           Item Order Id
   * 
   * @apiError (Unauthorized 401) Unauthorized Only authenticated users can access the data
   * @apiError (Forbidden 403)    Forbidden    Only user with same id or admins can access the data
   * @apiError (Not Found 404)    NotFound     User does not exist
   */
  .get(authorize(), controller.get)
  
 
  /**
   * @api {patch} v1/order/:orderId Update Order
   * @apiDescription Update some fields of a order document
   * @apiVersion 1.0.0
   * @apiName UpdateOrder
   * @apiGroup Order
   * @apiPermission admin
   *
   * @apiHeader {String} Athorization  User's access token
   * 
   * @apiParam  {String}             customerId             Customer Id
   * @apiParam  {String}             restaurantId           Restaurant Id 
   * @apiParam  {Number}             orderAmount            Order Amount
   * @apiParam  {Array}              orderItems             Items Order
     @apiParam  {String}             paymentMethod          Payment Mode [COD, CARD]
   * @apiParam  {String}             paymentStatus          Payment Status [Successful, Failed]
   * @apiParam  {String}             orderStatus            Order Status [Pending, InProgress, 
   *                                                        Dispatched, Delivered, Cancelled]
   * 
   * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
   * @apiError (Unauthorized 401) Unauthorized Only authenticated users can modify the data
   * @apiError (Forbidden 403)    Forbidden    Only user with same id or admins can modify the data
   * @apiError (Not Found 404)    NotFound     User does not exist
   */
  .patch(authorize(), validate(updateOrder), controller.update)

  /**
   * @api {patch} v1/order/:orderId Delete Order
   * @apiDescription Delete a order
   * @apiVersion 1.0.0
   * @apiName DeleteOrder
   * @apiGroup Order
   * @apiPermission admin
   *
   * @apiHeader {String} Athorization  User's access token
   *
   * @apiSuccess (No Content 204)  Successfully deleted
   *
   * @apiError (Unauthorized 401) Unauthorized  Only authenticated users can delete the data
   * @apiError (Forbidden 403)    Forbidden     Only user with same id or admins can delete the data
   * @apiError (Not Found 404)    NotFound      User does not exist
   */
  .delete(authorize(), controller.remove);

module.exports = router;
