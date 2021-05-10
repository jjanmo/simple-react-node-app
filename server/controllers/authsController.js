const getUserByToken = (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role ? true : false,
    isAuth: true,
    name: req.user.name,
    email: req.user.email,
  });
};

module.exports = {
  getUserByToken,
};
