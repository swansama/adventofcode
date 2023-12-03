const fs = require('fs');

const getData = (fileName) => {
  const contents = fs.readFileSync(fileName, 'utf8');
  return contents;
};

const getArray = (numberList) => numberList.split(/\n/);

exports.getStringArrayFromFile = (fileName) => {
  const lines = getData(fileName);
  return getArray(lines);
};