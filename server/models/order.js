const mongoose = require('mongoose');
const httpStatus = require('http-status');
const { omitBy, isNil } = require('lodash');
const APIError = require('../utils/APIError');

/**
 * Order Schema
 * @private
 */
const orderSchema = new mongoose.Schema({
    orderNo: {
      type: Number,
      required: true,
      unique: true,
    },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref : 'user',
      required: true
    },
    addressId: {
      type: mongoose.Schema.Types.ObjectId,
      ref : 'address',
      required: true
    },
    userRemarks:{
      type: String
    },
    orderAmount : {
      type: Number,
      required: true
    },
    orderItems: [{
         productId : {
            type: mongoose.Schema.Types.ObjectId,
            ref : 'product',
            required: false
          },
          quantity : {
            type: Number,
            required: true
          }, 
          SKU : {
            type: String,
            required: true
          }                   
    }],
    orderStatus : {
        type: String,
        required: true,
        intl: true
      },
  }, {
    timestamps: true,
  });

/**
 * Methods
 */
orderSchema.method({
    
  });


  /**
 * Statics
 */
orderSchema.statics = {

  /**
   * Get order
   *
   * @param {ObjectId} id - The objectId of order.
   * @returns {Promise<Order, APIError>}
   */
  async get(id) {
    try {
      let order;

      if (mongoose.Types.ObjectId.isValid(id)) {
        order = await this.findById(id).exec();
      }
      
      if (order) {
        return order;
      }

      throw new APIError({
        message: 'Order does not exist',
        status: httpStatus.NOT_FOUND,
      });
    } catch (error) {
      throw error;
    }
  },

  async generateOrderId() {
    const Order = mongoose.model('Order', orderSchema);
    const lastOrder = await Order.find().limit(1).sort({ orderNo: -1 }).exec();
    let orderId = 100001;
    if (!(lastOrder && lastOrder.length === 0)) {
      orderId = lastOrder[0].orderNo + 5;
    }
    return orderId;
  },

  /**
   * List order in descending order of 'createdAt' timestamp.
   *
   * @param {number} skip - Number of order to be skipped.
   * @param {number} limit - Limit number of order to be returned.
   * @returns {Promise<Order[]>}
   */
  list({
    page = 1, perPage = 30, orderId, customerId, restaurantId, timestamp, orderAmount, orderItems,
  }) {
    const options = omitBy({
       orderId, customerId, restaurantId, timestamp, orderAmount, orderItems
       }, isNil);

    return this.find(options)
      .sort({ createdAt: -1 })
      .skip(perPage * (page - 1))
      .limit(perPage)
      .exec();
  },   
};

  /**
 * @typedef Order
 */
module.exports = mongoose.model('orders', orderSchema);