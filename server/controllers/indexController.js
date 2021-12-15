const User = require('../models/User');

const home = (req, res) => {
  res.send('Hello World 🔥');
};

const postJoin = (req, res) => {
  const user = new User(req.body);

  user.save((error, userInfo) => {
    if (error) return res.json({ success: false, error });
    return res.status(200).json({ success: true });
  });
};

const postLogin = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (error, user) => {
    if (!user) {
      return res.json({
        success: false,
        message: '해당 이메일은 존재하지 않습니다.',
      });
    }

    user.checkPassword(password, (error, isMatch) => {
      if (!isMatch) return res.json({ loginSuccess: false, message: '비밀번호가 틀렸습니다.' });
    });

    user.generateToken((error, user) => {
      if (error) return res.status(400).send(error);

      res.cookie('auth_token', user.token).status(200).json({
        loginSuccess: true,
        userId: user._id,
      });
    });
  });
};

const postLogout = (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: '' }, (error, user) => {
    if (error) return res.json({ success: false, error });

    return res.status(200).send({
      success: true,
    });
  });
};

module.exports = {
  home,
  postJoin,
  postLogin,
  postLogout,
};
