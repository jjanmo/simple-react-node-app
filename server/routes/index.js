const express = require('express');
const router = express.Router();
const routes = require('../routes');
const { home, hello } = require('../controllers/indexController');

router.get(routes.home, home);

router.get(routes.hello, hello);

module.exports = router;
