const express = require('express');

const router = express.Router();
// const { Hero } = require('../db/models');

router.get('/', (req, res) => {
  res.render('team');
});

module.exports = router;
