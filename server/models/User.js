const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SALT_ROUNDS = 10;
const SECRET = 'Z3oM7nvQeE';

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
    default: 0,
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

  if (!user.isModified('password')) {
    bcrypt.genSalt(SALT_ROUNDS, (err, salt) => {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, (err, encrypted) => {
        if (err) return next(err);
        user.password = encrypted;
        next();
      });
    });
  } else {
    next();
  }
});

userSchema.methods.checkPassword = function (password, cb) {
  bcrypt.compare(password, this.password, function (error, isMatch) {
    if (error) return error;

    cb(null, isMatch);
  });
};

userSchema.methods.generateToken = function (cb) {
  const user = this;

  const token = jwt.sign(user._id.toHexString(), SECRET);
  user.token = token;
  user.save(function (error, user) {
    if (error) return cb(error);

    cb(null, user);
  });
};

const User = mongoose.model('User', userSchema);

module.exports = User;
