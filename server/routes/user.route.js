const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller');
const { authorize, ADMIN } = require('../middlewares/auth');

/**
 * Load address when API with userId route parameter is hit
 */
router.param('userId', controller.load)

router
.route('/:userId')
 /**
 * @api {patch} api/users/:userId Update User
 */
.patch(authorize(), controller.update)

module.exports = router; 