const express = require('express');
const router = express.Router();
const routes = require('../routes');
const { home } = require('../controllers/indexController');

// router.get(routes.home, home);

router.get('/api/hello', (req, res) => {
  res.send('hello world ⭐️');
});

module.exports = router;
