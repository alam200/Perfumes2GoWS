const express = require('express');
const validate = require('express-validation');
const controller = require('../controllers/auth.controller');
const { authorize } = require('../middlewares/auth');
const { login, register, refresh } = require('../validations/auth.validation');

const router = express.Router();

/**
 * @api { post } api/auth/register | Register
 */
router.route('/register')
  .patch(validate(register), controller.register);

/**
 * @api { get } api/auth/verify/:token | Verify
 */
router.route('/verify/:token')
  .get(controller.verify);

/**
 * @api { post } api/auth/resend | Resend Token
 */
router.route('/resend')
  .post(controller.resendToken);

/**
 * @api { post } api/auth/forgot | Forgot Password
 */
router.route('/forgot')
  .post(controller.forgotPassword);

/**
 * @api { get } api/auth/reset/:token | Get Reset Password
 */
router.route('/reset/:token')
  .get(controller.getResetPassword);

/**
 * @api { post } api/auth/reset | Post Reset Password
 */
router.route('/reset')
  .post(controller.postResetPassword);

/**
 * @api { post } api/auth/login | Login
 */
router.route('/login')
  .post(validate(login), controller.login);

/**
 * @api { post } api/auth/refresh-token | Refresh Token
 */
router.route('/refresh-token')
  .post(validate(refresh), controller.refresh);

/**
 * @api { post } api/auth/contactmail | Send ContactUs Mail
 */
router.route('/contactmail')
  .post(controller.sendContactMail);

module.exports = router;
