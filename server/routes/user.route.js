const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller');
const { authorize, ADMIN } = require('../middlewares/auth');

router.param('userID', controller.load)

router
  .route('/')
  /**
   * @api {get} api/users | List Users
   */
  .get(controller.list);

router
  .route('/removeUser/:userID')
   /**
   * @api {patch} api/users/:userID | Update Product
   */
  .delete(controller.removeUser);

router
  .route('/details/:userID')
  /**
   * @api {get} api/users/:userID | Get Product Details
   */
  .get(authorize(), controller.getUser);

router
  .route('/updateUser/:userID')
   /**
   * @api {patch} api/users/updateUser/:userID | Update Product
   */
  .patch(controller.updateUser);

module.exports = router;
