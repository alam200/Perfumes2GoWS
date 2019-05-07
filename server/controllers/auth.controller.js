const httpStatus = require('http-status');
const User = require('../models/user.model');
const RefreshToken = require('../models/refreshToken.model');
const Token = require('../models/token.model');
const moment = require('moment-timezone');
const APIError = require('../utils/APIError');
const { jwtExpirationInterval } = require('../config/vars');
var nodemailer = require('nodemailer');
const crypto = require('crypto');

/*
    Here we are configuring our SMTP Server details.
    STMP is mail server which is responsible for sending and receiving email.
*/
var smtpTransport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "perfumes2gows@gmail.com",
    pass: "Alhambra11"
  }
});

/**
* Returns a formated object with tokens
* @private
*/
function generateTokenResponse(user, accessToken) {
  const tokenType = 'Bearer';
  const refreshToken = RefreshToken.generate(user).token;
  const expiresIn = moment().add(jwtExpirationInterval, 'minutes');
  return {
    tokenType, accessToken, refreshToken, expiresIn,
  };
}

/**
 * Returns jwt token if registration was successful
 * @public
 */
exports.register = async (req, res, next) => {
  try {
    // Make sure this account doesn't already exist
    let user = await User.findOne({ email: req.body.email }).exec();
    if (user) return res.status(httpStatus.BAD_REQUEST).json({ message: 'The email address you have entered is already associated with another account.' });

    user = new User(
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        companyName: req.body.companyName,
        category: req.body.category,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        mobileNumber: req.body.mobileNumber
      });

    user.save(function (err) {
      if (err) { return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ message: err.message }); }

      // Create a verification token for this user
      var token = new Token({ _userId: user._id, token: crypto.randomBytes(16).toString('hex') });

      // Save the verification token
      token.save(function (err) {
        if (err) { return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message }); }

        // Send the email
        let link = "http://" + req.get('host') + "/#/user/verify/" + token.token;
        let html = "Hi " + user.firstName + "," +
          "<br> Please Click on the link to verify your email.<br><a href=" + link + ">Click here to verify</a><br>" +
          '<br>Thank you,<br>' + 'Perfumes2Go';
        let mailOptions = {
          from: '"Perfumes2Go" <perfumes2gows@gmail.com>',
          to: user.email,
          subject: 'Account Verification',
          html: html
        }
        smtpTransport.sendMail(mailOptions, function (err) {
          if (err) { return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message }); }
          res.status(httpStatus.OK).json({ message: 'A verification email has been sent to ' + user.email + '.' });
        });
      });
    });
  } catch (error) {
    return next(User.checkDuplicateEmail(error));
  }
}

/**
 * Returns jwt token if valid username and password is provided
 * @public
 */
exports.login = async (req, res, next) => {
  try {
    const { user, accessToken } = await User.findAndGenerateToken(req.body);
    const token = generateTokenResponse(user, accessToken);
    user.password = undefined;
    return res.json({ token, user: user });
  } catch (error) {
    return next(error);
  }
};

/**
 * Returns a new jwt when given a valid refresh token
 * @public
 */
exports.refresh = async (req, res, next) => {
  try {
    const { email, refreshToken } = req.body;
    const refreshObject = await RefreshToken.findOneAndRemove({
      userEmail: email,
      token: refreshToken,
    });
    const { user, accessToken } = await User.findAndGenerateToken({ email, refreshObject });
    const response = generateTokenResponse(user, accessToken);
    return res.json(response);
  } catch (error) {
    return next(error);
  }
};

exports.verify = async (req, res, next) => {
  try {
    let token = await Token.findOne({ token: req.params.token }).exec();
    if (!token) { return res.status(httpStatus.BAD_REQUEST).json({ message: "We were unable to find a valid token. Your token my have expired." }); }

    // If we found a token, find a matching user
    let user = await User.findById({ _id: token._userId }).exec();
    if (!user) { return res.status(httpStatus.BAD_REQUEST).json({ message: "We were unable to find a user for this token." }); }
    if (user.isVerified) { return res.status(httpStatus.BAD_REQUEST).json({ message: "This user has already been verified. Please login with valid credentials." }); }

    user.isVerified = true;
    user = await user.save();
    if (!user) { return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong. Please try again later." }); }
    if (user.isVerified) { return res.status(httpStatus.OK).json({ message: "The account has been verified. Please log in." }); }
  }
  catch (error) {
    return next(error);
  }
};

/**
* POST /resend
*/
exports.resendToken = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email }).exec();
    if (!user) return res.status(httpStatus.BAD_REQUEST).json({ message: 'We were unable to find a user with that email.' });
    if (user.isVerified) return res.status(httpStatus.BAD_REQUEST).json({ message: 'This account has already been verified. Please log in.' });

    // Create a verification token, save it, and send email
    var token = new Token({ _userId: user._id, token: crypto.randomBytes(16).toString('hex') });

    // Save the token
    token.save(function (err) {
      if (err) { return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message }); }

      // Send the email
      let link = "http://" + req.get('host') + "/#/user/verify/" + token.token;
      let html = "Hi " + user.firstName + "," +
        + "<br> Please Click on the link to verify your email.<br><a href=" + link + ">Click here to verify</a>";
      '<br><br>Thank you,<br>' + 'Perfumes2Go'
      let mailOptions = {
        from: '"Perfumes2Go" <perfumes2gows@gmail.com>',
        to: user.email,
        subject: 'Account Verification',
        html: html
      }
      smtpTransport.sendMail(mailOptions, function (err) {
        if (err) { return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message }); }
        res.status(httpStatus.OK).json({ message: 'A verification email has been sent to ' + user.email + '.' });
      });
    });
  }
  catch (error) {
    return next(error);
  }
}

exports.forgotPassword = async (req, res, next) => {
  try {
    if (!req.body) return res.status(httpStatus.BAD_REQUEST).json({ message: 'No request body' })
    if (!req.body.email) return res.status(httpStatus.BAD_REQUEST).json({ message: 'No Email in request body' })

    let user = await User.findOne({ email: req.body.email }).exec();
    if (!user) return res.status(httpStatus.BAD_REQUEST).json({ message: 'No account with that email address exists.' });

    const token = new Token({ _userId: user._id, token: crypto.randomBytes(16).toString('hex') });
    user.resetPasswordToken = token.token;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    user = await user.save();
    if (!user) return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Something went wrong. Please try again later.' });
    if (!user.isVerified) return res.status(httpStatus.BAD_REQUEST).json({ message: 'This account need to be verified first.' });

    let link = "http://" + req.headers.host + "/#/user/reset/" + token.token;
    const mailOptions = {
      to: user.email,
      from: '"Perfumes2Go" <perfumes2gows@gmail.com>',
      subject: 'Password Reset',
      html: "Hi " + user.firstName + "," +
        "<br>Use the link below to reset your password" +
        "<br><a href=" + link + ">Click here to rest password</a><br>" +
        'If you did not request this, please ignore this email and your password will remain unchanged.<br>' +
        '<br><br>Thank you,<br>' +
        'Perfumes2Go'
    };

    // send mail with defined transport object
    smtpTransport.sendMail(mailOptions, function (err) {
      if (err) { return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message }); }
      res.status(httpStatus.OK).json({ message: 'An e-mail has been sent to ' + user.email + ' with further instructions.' });
    });
  }
  catch (error) {
    return next(error);
  }
}

exports.getResetPassword = async (req, res) => {
  try {
    User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function (user) {
      if (!user) return res.status(httpStatus.BAD_REQUEST).json({ message: 'No account with that email address exists.' });
      res.render('reset', {
        User: req.user
      });
    });
  }
  catch (error) {
    return next(error);
  }
}

exports.postResetPassword = async (req, res, next) => {
  try {

    let user = await User.findOne({ resetPasswordToken: req.query.token, resetPasswordExpires: { $gt: Date.now() } });
    if (!user) return res.status(httpStatus.BAD_REQUEST).json({ message: 'No account with that email address exists.' });

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    user = await user.save();
    if (!user) return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Something went wrong. Please try again later.' });

    var mailOptions = {
      to: user.email,
      from: '"Perfumes2Go" <perfumes2gows@gmail.com>',
      subject: 'Password changed',
      html: 'Hello ' + user.firstName + "," +
        'This is a confirmation that the password for your account ' + user.email + ' has been changed.<br>' +
        'Please login with new password.' +
        '<br><br>Thank you,<br>' +
        'Perfumes2Go'
    };
    smtpTransport.sendMail(mailOptions, function (err) {
      if (err) { return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message }); }
      res.status(httpStatus.OK).json({ message: 'Success! Your password has been changed.' });
    });
  } catch (error) {
    return next(error);
  }
}

