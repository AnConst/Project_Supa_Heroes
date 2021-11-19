const router = require('express').Router();

router.post('/', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: 'Ошибка при удалении сессии' });
    }
    res
      .clearCookie('super_hero') // серверное удаление куки по имени
      .json({ message: 'Успешный выход' });
  });
});

module.exports = router;
