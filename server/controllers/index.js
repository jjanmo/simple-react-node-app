const User = require('../models/User');

const home = (req, res) => {
  res.send('Hello World 🔥');
};

const postJoin = (req, res) => {
  try {
    const user = new User(req.body);

    // TODO need validatation : use express validator https://express-validator.github.io/docs/
    user.save((error, userInfo) => {
      if (error) return res.json({ success: false, error });
      return res.json({ success: true });
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  home,
  postJoin,
};
