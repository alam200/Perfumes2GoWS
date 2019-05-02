const Joi = require('joi');

module.exports = {
  // POST /api/auth/register
  register: {
    body: {
      email: Joi.string().email().required(),
      password: Joi.string().required().min(6).max(15),
    },
  },

  // POST /api/auth/login
  login: {
    body: {
      email: Joi.string().email().required(),
      password: Joi.string().required().max(15),
    },
  },

//   // POST /v1/auth/facebook
//   // POST /v1/auth/google
//   oAuth: {
//     body: {
//       access_token: Joi.string().required(),
//     },
//   },

  // POST /api/auth/refresh
  refresh: {
    body: {
      email: Joi.string().email().required(),
      refreshToken: Joi.string().required(),
    },
  },
};
