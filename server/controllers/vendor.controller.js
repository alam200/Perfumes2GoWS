const httpStatus = require('http-status');
const { handler: errorHandler } = require('../middlewares/error');
const Vendor = require('../models/vendor');
//const User = require('../models/user.model');
//const Order = require('../models/order');

exports.vendors_list = async (req, res, next) => {
    try {
        let vendors = await Vendor.find({});
        console.log(vendors);
        res.status(httpStatus.OK);
        res.json(vendors);    
    } catch (error) {
        next(error)
    }    
}

exports.vendors_create = async (req, res, next) =>{
    const vendor = new Vendor(req.body);
    try {
        // console.log(vendor);
        const savedVendor = await vendor.save();       
        res.status(httpStatus.OK);
        res.json(savedVendor);
    } catch (error) {
        next(error)
    }
}

exports.vendor_update_post = async (req, res, next) =>{
    try {
        const response = await Vendor.findOneAndUpdate({SKU: req.body.SKU}, req.body);
        console.log(response);        
        res.status(httpStatus.OK);
        res.json({"query": "done"});
    } catch (error) {
        next(error);        
    }
}

exports.vendor_update_get = async (req, res, next) =>{
    try {
        console.log(req.params);
        let vendor = await Vendor.findOne(req.params);        
        res.status(httpStatus.OK);
        res.json(vendor);
    } catch (error) {
        next(error);        
    }
}

exports.vendors_sku_list = async (req, res, next) =>{
    try {
        let vendors = await Vendor.find({}).select({"SKU": 1, "_id":0});
        console.log(vendors);
        res.status(httpStatus.OK);
        res.json(vendors);    
    } catch (error) {
        next(error)
    }
}
