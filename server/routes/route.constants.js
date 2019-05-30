const GET_USER = '/api/users/:userId';
const LIST_PRODUCTS = '/api/products/';
const GET_PRODUCT = '/api/products/:productCode';
const GET_PRODUCT_DETAILS = '/api/products/details/:productCode';
const IS_PRODUCT_CODE_EXISTS =  '/api/products/isProductCodeExists/:productCode'
const LOGOUT = '/v1/auth/logout';
const GET_ORDERS = '/api/orders/';
const GET_ORDER = '/api/orders/:orderId';
const GET_ADDRESSES = '/api/addresses/';
const GET_ADDRESS = '/api/addresses/:addressId';
const USERS_LIST = '/api/users/';
const USER_UPDATE = '/api/users/updateUser/:userID';
const USER_REMOVE = '/api/users/removeUser/:userID';
const GET_USER_DETAILS = '/api/users/details/:userID';
const USER_REGISTER = '/api/auth/register';

exports.GET_USER = GET_USER;
exports.LIST_PRODUCTS = LIST_PRODUCTS;
exports.GET_PRODUCT = GET_PRODUCT;
exports.GET_PRODUCT_DETAILS = GET_PRODUCT_DETAILS;
exports.LOGOUT = LOGOUT;
exports.GET_ORDERS = GET_ORDERS;
exports.GET_ORDER = GET_ORDER;
exports.GET_ADDRESSES = GET_ADDRESSES;
exports.GET_ADDRESS = GET_ADDRESS;
exports.IS_PRODUCT_CODE_EXISTS = IS_PRODUCT_CODE_EXISTS;
exports.USERS_LIST = USERS_LIST;
exports.GET_USER_DETAILS = GET_USER_DETAILS;
exports.USER_UPDATE = USER_UPDATE;
exports.USER_REMOVE = USER_REMOVE;
exports.USER_REGISTER = USER_REGISTER;



