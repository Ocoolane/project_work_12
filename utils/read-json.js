const fsPromises = require('fs').promises;
const path = require('path');

module.exports.readFile = async (filename) => {
  const filepath = path.join(__dirname, filename);
  const file = await fsPromises.readFile(filepath, { encoding: 'utf8' });
  return JSON.parse(file);
};
