var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({message: 'Welcome to your server'});
});

module.exports = router;
