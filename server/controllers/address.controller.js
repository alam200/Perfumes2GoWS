const httpStatus = require('http-status');
// const { handler: errorHandler } = require('../middlewares/error');
const Address = require('../models/address');
const { handler: errorHandler } = require('../middlewares/error');


/**
 * Create new Address for user
 * @public
 */
exports.create = async (req, res, next) => {
    const address = new Address(req.body);
    try {
        // address.userId = req.query.userId;
        const savedAddress = await address.save();
        res.status(httpStatus.CREATED);
        res.json(savedAddress);
    } catch (e) {
        next(e);
    }
  };

  /**
 * Update existing address
 * @public
 */
exports.update = (req, res, next) => {
    const address = Object.assign(req.locals.address, req.body);
    try {
        address.save()
        .then(savedAddress => res.json(savedAddress))
        .catch(e => next(Product.httpStatus(e)));
    } catch (e) {
        next(e);
    }
  };

/**
 * Get address list
 * @public
 */
exports.list = async (req, res, next) => {
    try {
      const addresses = await Address.find({ userId : req.query.userId });
      res.json(addresses);
    } catch (error) {
      next(error);
    }
  };

/**
 * Get address details
 * @public
 */
exports.get = async (req, res, next) => {
  try {
    const address = await Address.get(req.params.addressId);
    res.json(address);
  } catch (error) {
    next(error);
  }
};

/**
 * Load Address and append to req.
 * @public
 */
exports.load = async (req, res, next, id) => {
    try {
      const address = await Address.get(id);
      req.locals = { address };
      return next();
    } catch (error) {
      return errorHandler(error, req, res);
    }
  };

/**
 * Delete Address
 * @public
 */
exports.remove = async (req, res, next) => {
    Address.findByIdAndRemove(req.params.addressId)
      .then(() => res.status(httpStatus.NO_CONTENT).end(), res.json('Address removed successfully'))
      .catch(e => next(e));
  };


