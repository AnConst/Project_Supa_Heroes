const { User } = require('../db/models');
const regRouter = require('express').Router();

router.get('/', (req, res) => {
  res.render('/registration');
});

router.post('/', async (req, res) => {
  const { login, email, password } = req.body;
  const user_registration = await User.create({
    login,
    email,
    password,
  });

  res.redirect('/login');
});

module.exports = regRouter;
