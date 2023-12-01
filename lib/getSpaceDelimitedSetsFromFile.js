const { getStringArrayFromFile } = require('./getStringArrayFromFile');

const processInput = (array) => {
  const list = [];
  let data = [];
  array.forEach((line) => {
    if (line === '') {
      list.push(data);
      data = [];
    } else {
      data.push(line);
    }
  });
  // push last one on EOF
  list.push(data);
  return list;
};

const getSpaceDelimitedSetsFromFile = (file) => processInput(getStringArrayFromFile(file));

module.exports = {
  getSpaceDelimitedSetsFromFile,
};