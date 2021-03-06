const express = require('express');
const router = express.Router();
const { auth } = require('../middlewares/auth');
const { getUserByToken } = require('../controllers/authsController');

router.get('/', auth, getUserByToken);

module.exports = router;
