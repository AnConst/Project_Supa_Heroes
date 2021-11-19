const router = require('express').Router();
const { User } = require('../db/models');

router
  .get('/', (req, res) => {
    res.render('login');
  })

  // router.post('/', async (req, res) => {
  //   const { mail, passwort} = req.body;
  //   // console.log(req.body);
  //   const user = await User.findOne({ where: { email: mail} });
  //   if (!user) {
  //     res.render('login', {message: "Данные введены неверно! Залогиньтесь!"})
  //   } else {
  //     const isCorrectPassword = await bcrypt.compare(passwort, user.password);
  //     if (isCorrectPassword) {
  //       req.session.isAuthorized = true;
  //       req.session.user = user;
  //       res.render('index', {
  //         isAuthorized: req.session.isAuthorized,
  //         email: req.session.user?.mail,
  //       })
  //     }
  //     else {
  //       res.render('login', { message: 'Неверные данные! Залогинься еще раз!'});
  //     }
  //   }
  // })
  .post('/', async (req, res) => {
    const { login } = req.body;
    const user = await User.findOne({
      where: {
        login,
      },
      raw: true,
    });
    req.session.user = {
      login: user.login,
      id: user.id,
      favorite: [],
    };
    req.session.isAuthorized = true;
    if (user) {
      return res.json({
        login: true,
      });
    }
    return res.json({
      login: false,
    });
  });

module.exports = router;
