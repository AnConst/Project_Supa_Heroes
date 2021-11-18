const router = require('express').Router();
const { User } = require('../db/models');

router.get('/', (req, res) => {
  res.render('registration');
});

router.post('/', async (req, res) => {
  const { login, email, password } = req.body;
  const userRegistration = await User.create({
    login,
    email,
    password,
  });

  res.redirect('/login');
});

module.exports = router;
