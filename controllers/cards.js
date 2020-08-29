const { readFile } = require('../utils/read-json');

module.exports.getCards = async (_req, res, next) => {
  try {
    const cards = await readFile('../data/cards.json');
    res.status(200).send(cards);
  } catch (error) {
    next(error);
  }
};
