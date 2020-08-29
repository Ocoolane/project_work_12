const express = require('express');
const users = require('./users');
const cards = require('./cards');

const router = express.Router();
router.use('/users', users);
router.use('/cards', cards);

router.get('*', (_req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

module.exports = router;
