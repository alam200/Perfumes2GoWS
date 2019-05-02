const Joi = require('joi');


module.exports = {

   // GET /api/orders
   listOrder: {
    query: {
      page: Joi.number().min(1),
      perPage: Joi.number().min(1).max(100),
      orderNo: Joi.number(),
      customerId: Joi.string()
    },
  },

  // POST /api/orders
  createOrder: {
    body: {
      customerId: Joi.string()
    },
  },

 // PUT /api/orders/:orderId
 replaceOrder: {
  body: {
    customerId: Joi.string()
},
  params: {
    orderId: Joi.string().required(),
  },
},

// PATCH /api/orders/:orderId
updateOrder: {
  body: {
    customerId: Joi.string()
  },
  params: {
    orderId: Joi.string().required(),
  },
 },  
};
