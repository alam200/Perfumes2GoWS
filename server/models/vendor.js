const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const httpStatus = require('http-status');
const APIError = require('../utils/APIError');
const fs = require('fs');

const vendorSchema = new Schema({
    SKU: {
        type: String,
        required: true,
        unique: true
    },
    vendorID: {
        type: String,
        required: true,
        unique: true
    },
    productDescription: {
        type: String,
    },
    purchaseDate: {
        type: Date,
    },
    lastPurchasePrice: Number,
    lastPurchasedQty: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('vendors', vendorSchema);