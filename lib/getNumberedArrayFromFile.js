const fs = require('fs');

const getData = (fileName) => {
  const contents = fs.readFileSync(fileName, 'utf8');
  return contents;
};

const getArray = (numberList) => numberList.split(/\n/);

exports.getNumberedArrayFromFile = (fileName) => {
  const numbers = getData(fileName);
  const strArray = getArray(numbers);
  const numArray = strArray.map((num) => parseInt(num, 10));
  const cleanArray = numArray.filter((num) => !isNaN(num));
  return cleanArray;
};
