const express = require('express');
const router = express.Router();

router.get('/newSmiler', async (req, res) => {
  res.router('newSmiler');
});

module.exports = router;
