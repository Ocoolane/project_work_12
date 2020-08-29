const { readFile } = require('../utils/read-json');

module.exports.getUsers = async (_req, res, next) => {
  try {
    const users = await readFile('../data/users.json');
    res.status(200).send(users);
  } catch (error) {
    next(error);
  }
};

module.exports.getUser = async (req, res, next) => {
  try {
    const users = await readFile('../data/users.json');
    const { id } = req.params;
    const user = users.find((item) => item._id === id);

    if (!user) {
      res.status(404).send({ message: 'Нет пользователя с таким id' });
      return;
    }

    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
};
