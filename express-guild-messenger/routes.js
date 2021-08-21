const { restart } = require('nodemon');

const router = require('express').Router();

router.get('/', (req, res) => {
  return res.status(200).json({ message: 'Welcome to Express Server'})
});

module.exports = router;