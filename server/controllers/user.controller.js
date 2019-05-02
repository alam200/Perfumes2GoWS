const httpStatus = require('http-status');
const User = require('../models/user.model');
const { handler: errorHandler } = require('../middlewares/error');




  /**
 * Update existing user
 * @public
 */
exports.update = (req, res, next) => {
    const user = Object.assign(req.locals.user, req.body);
    try {
        user.save()
        .then(savedUser => res.json(savedUser))
        .catch(e => next(e));
    } catch (e) {
        next(e);
    }
  };

/**
 * Get user details
 * @public
 */
exports.get = async (req, res, next) => {
  try {
    const user = await User.get(req.params.userId);
    user.password = undefined;
    res.json(user);
  } catch (error) {
    next(error);
  }
};

/**
 * Load User and append to req.
 * @public
 */
exports.load = async (req, res, next, id) => {
    try {
      const user = await User.get(id);
      req.locals = { user };
      return next();
    } catch (error) {
      return errorHandler(error, req, res);
    }
  };



