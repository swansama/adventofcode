const { getStringArrayFromFile } = require('../lib/getStringArrayFromFile');

const calibArray = getStringArrayFromFile('data.txt');


let calibAnswer = 0;

const result = calibArray.map(calib => calib.match(/\d/g).reduce( (a, b) => a + b)); 

result.forEach(num => {
    
    const strNum = (num[0] + num[num.length - 1]) ;
    const calibNum = parseInt(strNum, 10);
    calibAnswer += calibNum;

});

console.log(calibAnswer);

    




