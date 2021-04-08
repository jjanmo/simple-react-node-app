const express = require('express');
const router = express.Router();
const { home, postJoin } = require('../controllers');

router.get('/', home);
router.post('/join', postJoin);

module.exports = router;
