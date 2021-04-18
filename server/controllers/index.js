const User = require('../models/User');
const { use } = require('../routes');

const home = (req, res) => {
  res.send('Hello World 🔥');
};

const postJoin = (req, res) => {
  try {
    const user = new User(req.body);
    user.save((error, userInfo) => {
      if (error) return res.json({ success: false, error });
      return res.status(200).json({ success: true });
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  home,
  postJoin,
};
