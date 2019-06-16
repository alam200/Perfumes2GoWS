const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const APIError = require('../utils/APIError');
const httpStatus = require('http-status');
const moment = require('moment-timezone');
const bcrypt = require('bcryptjs');
const jwt = require('jwt-simple');
const { env, jwtSecret, jwtExpirationInterval } = require('../config/vars');


const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: true,
    match: /^\S+@\S+\.\S+$/,
    trim: true,
    lowercase: true,
    unique: true,
    sparse: true
  },
  phoneNumber: {
    type: String,
    unique: true,
    sparse: true
  },
  mobileNumber: {
    type: String,
    unique: true,
    sparse: true
  },
  isVerified: { type: Boolean, default: false },
  companyName: String,
  password: String,
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  category: String,
  city: String,
  created: Number,
  lastLoging: { type: Number, default: 0 }
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */
userSchema.pre('save', async function save(next) {
  try {
    // if (!this.isModified('password')) return next();
    const rounds = env === 'test' ? 1 : 10;
    if (this.password.length <= 15) {
      const hash = await bcrypt.hash(this.password, rounds);
      this.password = hash;
    }
    return next();
  } catch (error) {
    return next(error);
  }
});

/**
 * Methods
 */
userSchema.method({

  token() {
    const playload = {
      exp: moment().add(jwtExpirationInterval, 'minutes').unix(),
      iat: moment().unix(),
      sub: this._id,
    };
    return jwt.encode(playload, jwtSecret);
  },

  async passwordMatches(password) {
    return bcrypt.compare(password, this.password);
  },
});

/**
 * Statics
 */
userSchema.statics = {
  /**
   * Get User
   *
   * @param {ObjectId} id - The objectId of user.
   * @returns {Promise<User, APIError>}
   */
  async get(id) {
    try {
      let user;

      if (mongoose.Types.ObjectId.isValid(id)) {
        user = await this.findById(id).exec();
      }
      if (user) {
        return user;
      }

      throw new APIError({
        message: 'User does not exist',
        status: httpStatus.NOT_FOUND
      });
    } catch (error) {
      throw error;
    }
  },

  /**
 * Return new validation error
 * if error is a mongoose duplicate key error
 *
 * @param {Error} error
 * @returns {Error|APIError}
 */
  checkDuplicateEmail(error) {
    if (error.code === 11000) {
      return new APIError({
        message: 'Validation Error',
        errors: [{
          field: 'email',
          location: 'body',
          messages: ['"email" already exists'],
        }],
        status: httpStatus.CONFLICT,
        isPublic: true,
        stack: error.stack,
      });
    }
    return error;
  },

  /**
  * Find user by email and tries to generate a JWT token
  *
  * @param {ObjectId} id - The objectId of user.
  * @returns {Promise<User, APIError>}
  */
  async findAndGenerateToken(options) {
    const { email, password, refreshObject } = options;
    if (!email) throw new APIError({ message: 'An email is required to generate a token' });
    const user = await this.findOne({ email }).exec();
    const err = {
      status: httpStatus.UNAUTHORIZED,
      isPublic: true,
    };

    if (!user) {
      err.message = 'The email address ' + email + ' is not associated with any account. Double-check your email address and try again.';
      throw new APIError(err);
    }

    if (!user.isVerified) {
      err.message = 'Your account has not been verified.';
      throw new APIError(err);
    }

    if (password) {
      if (user && await user.passwordMatches(password)) {
        return { user, accessToken: user.token() };
      } else {
        err.message = 'Incorrect email or password';
        throw new APIError(err);
      }
    } else if (refreshObject && refreshObject.userEmail === email) {
      return { user, accessToken: user.token() };
    } else {
      err.message = 'Incorrect email or refreshToken';
      throw new APIError(err);
    }
  }
}


module.exports = mongoose.model('user', userSchema);
