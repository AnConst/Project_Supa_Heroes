const express = require('express');

const router = express.Router();
router.delete('/', async (req, res) => {
  const { nameDelete } = req.body;
  req.session.heroes.splice(indexOf(nameDelete), 1); //ne zabbltj vbltashitj id iz req.session vishe bloka koda

  console.log(req.session);

  res.json({ deleted: true });
})
module.exports = router;
