const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const authRoutes = require('./auth.route');
const userRoutes = require('./user.route');
const productsRoutes = require('./product.route');
const addressesRoutes = require('./address.route');
const ordersRoutes = require('./order.route');

/** PRODUCTION */
// const dbUri = "mongodb://akros:akros@142.93.252.227:27017/fragrance-deals?authSource=admin";
/** DEVELOPMENT */
const dbUri = "mongodb://localhost:27017/fragrance-deals?authSource=admin";

mongoose.Promise = global.Promise;

const parseConfig = {
    useNewUrlParser: true
};
mongoose.set('useCreateIndex', true);

mongoose.connect(dbUri, parseConfig, (err) => {
    if (err) {
        console.log("error", err);
    } else {
        if (dbUri.indexOf('localhost') !== -1) {
            console.log('MongoDB(local) connected');
        } else {
            console.log('MongoDB(remote) connected');
        }
    }
});

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/products', productsRoutes);
router.use('/addresses', addressesRoutes);
router.use('/orders',ordersRoutes);

module.exports = router;
