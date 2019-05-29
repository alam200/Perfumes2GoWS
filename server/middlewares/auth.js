const httpStatus = require('http-status');
const passport = require('passport');
const User = require('../models/user.model');
const APIError = require('../utils/APIError');

const {
  CREATE_USER,
  GET_USER,
  LIST_PRODUCTS,
  GET_PRODUCT,
  GET_ADDRESSES,
  GET_ADDRESS,
  LOGOUT,
  GET_ORDERS,
  GET_ORDER,
  GET_PRODUCT_DETAILS,
  IS_PRODUCT_CODE_EXISTS,
  USERS_LIST,
  GET_USER_DETAILS,
  USER_UPDATE,
  USER_REMOVE,
  USER_REGISTER,
} = require('../routes/route.constants');

const ADMIN = 'Admin';
const CUSTOMER = 'Customer';

const LOGGED_USER = '_loggedUser';

function isUserAuthorized(req, user) {
  const apiUrl = req.baseUrl + req.route.path;
  const method = req.method;
  switch (method) {
    case 'GET':
      switch (apiUrl) {
        case GET_ADDRESSES:// get addresses list
        case GET_ADDRESS: // get particular address
        case GET_ORDERS: // get list of orders
        case GET_ORDER:// get details of an order
        case GET_USER: // get user details
        case GET_PRODUCT_DETAILS: // get product details
        case IS_PRODUCT_CODE_EXISTS: // check whether product code already exists
        case USERS_LIST:      //get users list
        case GET_USER_DETAILS:
        case USER_UPDATE:
        case USER_REMOVE:
          return true;
        default:
          break;
      }
      break;
    case 'POST':
      switch (apiUrl) {
        case LIST_PRODUCTS:// create product
          if (user.category === ADMIN) {
            return true;
          }
          break;
        case GET_ADDRESSES:
          return true;
        case LOGOUT:
          return true;
        default:
          break;
      }
      break;
    case 'DELETE':
      switch (apiUrl) {
        case GET_PRODUCT:// delete product
        case GET_USER:
        case USER_UPDATE:
          if (user.category === ADMIN) {
            return true;
          }
          break;
        case GET_ADDRESS:
            return true;
        default:
          break;
      }
      break;
    case 'PATCH':
      switch (apiUrl) {
        case GET_USER:// update user
        case GET_ADDRESS:
        case GET_PRODUCT:// update product
        case GET_ORDER: // update order
        case USER_UPDATE:
        case USER_REGISTER:
            return true;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return false;
}

const handleJWT = (req, res, next) => async (err, user, info) => {
  // This code is being commented temparory to bypass token security
  const error = err || info;
  //const logIn = Promise(req.logIn);
  const apiError = new APIError({
    message: error ? error.message : 'Unauthorized',
    status: httpStatus.UNAUTHORIZED,
    stack: error ? error.stack : undefined,
  });

  try {
    if (error || !user) throw error;
    //await logIn(user, { session: false });
  } catch (e) {
    return next(apiError);
  }

  const result = isUserAuthorized(req, user);

  if (!result) {
    apiError.status = httpStatus.FORBIDDEN;
    apiError.message = 'Forbidden';
    return next(apiError);
  } else if (err || !user) {
    return next(apiError);
  }



  req.user = user;

  return next();
};

exports.ADMIN = ADMIN;
exports.CUSTOMER = CUSTOMER;

exports.authorize = (roles = User.roles) => (req, res, next) =>
  passport.authenticate(
    'jwt', { session: false },
    handleJWT(req, res, next, roles),
  )(req, res, next);

exports.oAuth = service =>
  passport.authenticate(service, { session: false });
