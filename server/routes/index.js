const express = require('express');
const router = express.Router();
const { home, postJoin, postLogin } = require('../controllers');

router.get('/', home);
router.post('/login', postLogin);
router.post('/join', postJoin);

module.exports = router;
