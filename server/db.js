const mongoose = require('mongoose');
require('dotenv').config();

const connect = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => console.log('MongoDB Connected ... 🚀'));
};

module.exports = {
  connect,
};
