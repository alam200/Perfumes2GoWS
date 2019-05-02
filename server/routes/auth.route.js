const express = require('express');
const validate = require('express-validation');
const controller = require('../controllers/auth.controller');
const { authorize } = require('../middlewares/auth');
const {
  login,
  register,
  refresh
} = require('../validations/auth.validation');

const router = express.Router();

/**
 * @api {post} api/auth/register Register
 **/
router.route('/register')
  .post(validate(register), controller.register);

router.route('/verify/:token')
  .get(controller.verify);

router.route('/resend').post(controller.resendToken);

router.route('/forgot').post(controller.forgotPassword);

router.route('/reset/:token').get(controller.getResetPassword);

router.route('/reset').post(controller.postResetPassword);
/**
 * @api {post} api/auth/login Login
 */
router.route('/login')
  .post(validate(login), controller.login);

/**
 * @api {post} api/auth/refresh-token Refresh Token
 */
router.route('/refresh-token')
  .post(validate(refresh), controller.refresh);

module.exports = router;
