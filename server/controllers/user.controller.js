const httpStatus = require('http-status');
const User = require('../models/user.model');
const { handler: errorHandler } = require('../middlewares/error');
const nodemailer = require('nodemailer');




  /**
 * Update existing user
 * @public
 */
exports.update = (req, res, next) => {
    const user = Object.assign(req.locals.user, req.body);
    try {
        user.save()
        .then(savedUser => res.json(savedUser))
        .catch(e => next(e));
    } catch (e) {
        next(e);
    }
  };

/**
 * Get user details
 * @public
 */
exports.get = async (req, res, next) => {
  try {
    const user = await User.get(req.params.userId);
    //user.password = undefined;
    res.json(user);
  } catch (error) {
    next(error);
  }
};


/**
 * Load User and append to req.
 * @public
 */
exports.load = async (req, res, next, id) => {
    try {
      const user = await User.get(id);
      req.locals = { user };
      return next();
    } catch (error) {
      return errorHandler(error, req, res);
    }
  };

const adminMailAddress = 'perfumes2gows@gmail.com';
const smtpTransport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: adminMailAddress,
    pass: "Alhambra11"
  }
});
  /**
 * Update existing user
 * @public
 */
exports.updateUser = async (req, res, next) => {
  let user = Object.assign(req.locals.user, req.body);
  if(user.isVerified){
    let link = "http://" + req.get('host') + "/";
    let html = `Your account have been already verified<br/>
    <a hreef="${link}" target="_blank">${link}</a>`;
    let adminMailOptions = {
      from: `"Perfumes2Go" <${adminMailAddress}>`,
      to: user.email,
      subject: 'Account Verified',
      html: html
    }
    smtpTransport.sendMail(adminMailOptions, function (err) {
      res.status(httpStatus.OK).json({ message: 'Please wait for admin verification.' });
      console.log(err);
    });    
  }
  try {
    user.save()
      .then(savedUser => res.json(savedUser))
      .catch(e => next(e));
  } catch (e) {
    next(e);
  }
}

/**
 * Delete User
 * @public
 */
exports.removeUser = async (req, res, next) => {
  try {
    await User.findOneAndRemove({_id : req.params.userID}, function (err,User){
      if(err) {
        return next(new Error('Todo was not found!'));
      }
      res.json('Successfully removed');
    });
  } catch (e) {
    console.log(e);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const user = await User.get(req.params.userID);
    //user.password = undefined;
    res.json(user);
  } catch (error) {
    next(error);
  }
};

/**
 * Get user list 
 * @public
 */
exports.list = async (req, res, next) => {
  try {
    let index = Number.parseInt(req.query.pageNo, 10) - 1;
    let recordsPerPage = Number.parseInt(req.query.recordsPerPage);
    const searchText = req.query.searchText;
    const type = req.query.type;
    const userCategory = req.query.userCategory;

    /** exception handler */
    if (isNaN(index)) index = 0;
    if (isNaN(recordsPerPage)) recordsPerPage = 50;

    //reserved for verify confirm
    /* 
    let filterOptions = {};

    if (type && type.toUpperCase() != 'ALL') {
      filterOptions['type'] = type;
    }*/
    
    /**User can search based on following option by inputing in search box available on product
     * list page
     */
    let searchOptions = {};
    if (searchText && searchText.trim().length > 0) {
      searchOptions = {
        $or: [
          { firstName: { $regex: '.*' + searchText + '.*', $options: 'i' } },
          { lastName: { $regex: '.*' + searchText + '.*', $options: 'i' } },
          { email: { $regex: '.*' + searchText + '.*', $options: 'i' } },
          { companyName: { $regex: '.*' + searchText + '.*', $options: 'i' } },
        ]
      }
    }

    var sortObject = {};
    var sType = req.query.column;
    var sdir = req.query.sdir;
    if (sType && sdir) {
      // avoid adding 'undefined'
      sortObject[sType] = sdir;
    }

    /** exception handler */
    if (!Object.keys(sortObject).length && sortObject.constructor === Object) {
      sortObject = {
        brand: 'asc',
        description: 'asc'
      };
    }
    let users;
    let count = 0;
    /**In case of 'New Products' request get products whilch are added within last 7 days*/
    users = await User.find(searchOptions).skip(index).limit(recordsPerPage)
      .sort(sortObject)
      .exec();
    count = await User.find(searchOptions).countDocuments();
    
    res.json({
      userList: users,
      totalUsers: count
    });
  } catch (error) {
    next(error);
  }
};






