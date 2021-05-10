const express = require('express');
const router = express.Router();
const routes = require('../routes');
const { auth } = require('../middlewares/auth');
const { postJoin, postLogin, postLogout } = require('../controllers/indexController');

router.post(routes.user.login, postLogin);
router.post(routes.user.join, postJoin);
router.post(routes.user.logout, auth, postLogout);

module.exports = router;
