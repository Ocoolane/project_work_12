const express = require('express');
const path = require('path');
const routes = require('./routes');

const { PORT = 3000 } = process.env;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);
app.use((_err, _req, res, next) => {
  res.status(500).send({ message: 'Ошибка сервера' });
  next();
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on PORT: ${PORT}`);
});
