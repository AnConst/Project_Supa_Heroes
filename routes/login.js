const router = require('express').Router();
const { User } = require('../db/models');

router.get('/', (req, res) => {
  res.render('login');
})

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: {email: name в хбс, password: name в хбс}})
  if (user) {
    res.json({users: true});
  } else {
    res.json({users: false});
  }
})

module.exports = router;
