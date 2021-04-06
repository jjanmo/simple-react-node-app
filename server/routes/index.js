const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send({ title: 'Hello World, This is Simple React Node App 🥳' });
});

module.exports = router;
