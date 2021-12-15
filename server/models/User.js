const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    minlength: 5,
  },
  role: {
    type: Number,
    default: 0, // 0 user / 1 admin
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

userSchema.pre('save', function (next) {
  const user = this;
  if (user.isModified('password')) {
    bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS, 10), (err, salt) => {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, (err, hash) => {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

userSchema.methods.checkPassword = function (password, cb) {
  bcrypt.compare(password, this.password, function (error, isMatch) {
    if (error) return cb(error);

    cb(null, isMatch);
  });
};

userSchema.methods.generateToken = function (cb) {
  const user = this;

  // sign(id, secret) => token(JWT access token)
  // → id + secret key => token : encoding 과정
  const token = jwt.sign(user._id.toHexString(), process.env.SECRET);
  user.token = token;
  user.save(function (error, user) {
    if (error) return cb(error);

    cb(null, user);
  });
};

userSchema.statics.findByToken = function (token, cb) {
  const user = this;

  // verify(token, secret) => id
  // → token + secret key => id : decoding 과정(더하는 개념은 아니다.)
  jwt.verify(token, process.env.SECRET, function (error, decoded) {
    user.findOne({ _id: decoded, token }, function (error, user) {
      if (error) return cb(error);

      cb(null, user);
    });
  });
};

const User = mongoose.model('User', userSchema);

module.exports = User;
