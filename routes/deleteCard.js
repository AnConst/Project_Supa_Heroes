const express = require('express');

const router = express.Router();

const { Hero } = require('../db/models');

router.delete('/', async (req, res) => {
  const { nameDelete } = req.body;
  const hero = await Hero.findOne({
    where: {
      superpower: nameDelete,
    },
    raw: true,
  });
  console.log(hero);
  // let heroesArr = req.session.heroes;
  req.session.heroes.splice(req.session.heroes.indexOf(hero), 1); // ne
  // zabbltj vbltashitj id iz
  // req.session vishe bloka koda

  console.log(req.session);

  res.json({ deleted: true });
});
module.exports = router;
