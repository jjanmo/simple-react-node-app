const express = require('express');
const router = express.Router();
const { auth } = require('../middlewares/auths');
const { getUserByToken } = require('../controllers/auths');

router.get('/', auth, getUserByToken);

module.exports = router;
