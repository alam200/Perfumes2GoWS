const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller');
const { authorize, ADMIN } = require('../middlewares/auth');

router.param('userCode', controller.load)

router
  .route('/')
  /**
   * @api {get} api/users | List Users
   */
  .get(controller.list);


router
  .route('/details/:userID')
  /**
   * @api {get} api/users/details/:userCode | Get User Details
   */
  .get(controller.getUser);

router
  .route('/removeUser/:userID')
  /**
   * @api {get} api/users/remove/:userCode 
   */
  .get(controller.removeUser);

router
  .route('/updateUser/:userID')
 /**
 * @api {patch} api/users/:userCode Update User
 */
  .get(controller.updateUser);
/**
* @api {delete} api/products/:productCode | Delete Product
*/
//.delete(authorize(), controller.remove);

module.exports = router;
