const express = require('express');

const router = express.Router();
const { Hero } = require('../db/models');

router.post('/', async (req, res) => {
  const { nameH1 } = req.body;
  // try {
  const hero = await Hero.findOne({
    where: {
      name: nameH1,
    },
    raw: true,
  });
    // kogda loginitsya pervij raz napisatj req.session.user = user bla-bla
  const heroes = [];

  req.session.heroes = heroes;
  req.session.heroes.push(hero);

  // req.session.save((error) => {
  //   if(error) {
  //     console.log('Session was not saved');
  //   } catch (error) {
  //     console.error(error);
  //     return res.status(401).json({ added: false });
  //   }
  res.json({ added: true, hero });
  // v application.js napisatj alert('vbl dobavili v komandy hero.name'
  // i v hbs-ke otrisovatj mozhno hero
});
module.exports = router;
