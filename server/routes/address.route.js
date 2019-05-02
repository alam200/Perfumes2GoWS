const express = require('express');
const router = express.Router();
const Address = require('../models/address');
const controller = require('../controllers/address.controller');
const { authorize, ADMIN } = require('../middlewares/auth');

/**
 * Load address when API with addressId route parameter is hit
 */
router.param('addressId', controller.load)

router
  .route('/')
  /**
   * @api {get} api/addresses List Address
   */
  .get(authorize(), controller.list)

  /**
   * @api {post} api/addresses Create Address
   */
  .post(authorize(), controller.create);

  router
  .route('/:addressId')
  /**
   * @api {get} api/addresses/:addressId Get Address
   */
  .get(authorize(), controller.get)
   /**
   * @api {patch} api/addresses/:addressId Update Address
   */
  .patch(authorize(), controller.update)

   /**
   * @api {delete} api/addresses/:addressId    Delete Address
   */
  .delete(authorize(), controller.remove);

module.exports = router; 