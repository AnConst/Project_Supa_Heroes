const express = require('express');

const router = express.Router();
// const { Hero } = require('../db/models');

router.get('/', (req, res) => {
  const { heroes } = req.session;
  console.log(heroes);
  res.render('team', { heroes });
});

module.exports = router;
