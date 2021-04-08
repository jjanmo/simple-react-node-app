const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', (req, res) => {
  res.send('Hello World 🔥');
});

router.post('/join', (req, res) => {
  try {
    // TODO need validatation : use express validator https://express-validator.github.io/docs/
    const user = new User(req.body);

    user.save((error, userInfo) => {
      if (error) return res.json({ success: false, error });
      return res.status(200).json({
        success: true,
      });
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
