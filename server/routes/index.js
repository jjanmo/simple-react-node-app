const express = require('express');
const router = express.Router();
const routes = require('../routes');
const { home } = require('../controllers/indexController');

router.get(routes.home, home);

module.exports = router;
