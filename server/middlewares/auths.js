const User = requir('../models/User');

export const auth = (req, res, next) => {
  const token = req.cookie.auth_token;
  User.findByToken(token, (error, user) => {
    if (error) throw error;
    if (!user) return res.json({ isAuth: false, error: true });

    req.token = token;
    req.user = user;
    next();
  });
};

module.exports = {
  auth,
};
