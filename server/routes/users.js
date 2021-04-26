const express = require('express');
const router = express.Router();
const routes = require('../routes');
const { postJoin, postLogin } = require('../controllers');

router.post(routes.user.login, postLogin);
router.post(routes.user.join, postJoin);

module.exports = router;
