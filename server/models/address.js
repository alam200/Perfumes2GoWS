const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
    attentionTo : String,
    addressLine1: String,
    addressLine2: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
    email: String,
    phone: String,
    userId : String
});

/**
 * Statics
 */
addressSchema.statics = {
    /**
     * Get Address
     *
     * @param {ObjectId} id - The objectId of address.
     * @returns {Promise<Address, APIError>}
     */
    async get(id) {
      try {
        let address;
  
        if (mongoose.Types.ObjectId.isValid(id)) {
            address = await this.findById(id).exec();
        }
        if (address) {
          return address;
        }
  
        throw new APIError({
          message: 'Address does not exist',
          status: httpStatus.NOT_FOUND
        });
      } catch (error) {
        throw error;
      }
    },
}

module.exports = mongoose.model('address',addressSchema);