const { getStringArrayFromFile } = require('../lib/getStringArrayFromFile');

const calibArray = getStringArrayFromFile('data.txt');


let calibAnswer = 0;

calibArray.forEach(str => {
    let leftNum ="";
    let rightNum = "";
    const parseLeft = str.split('');
    const parseRight = str.split('');
    while (!leftNum){
        if (parseLeft[0].match(/\d/)) {
            leftNum = parseLeft[0];
            
        } else if (parseLeft.join('').match(/^one/)) {
            leftNum = "1";
            
        } else if (parseLeft.join('').match(/^two/)) {
            leftNum = "2";
            
        }else if (parseLeft.join('').match(/^three/)) {
            leftNum = "3";
            
        }else if (parseLeft.join('').match(/^four/)) {
            leftNum = "4";
            
        }else if (parseLeft.join('').match(/^five/)) {
            leftNum = "5";
            
        }else if (parseLeft.join('').match(/^six/)) {
            leftNum = "6";
            
        }else if (parseLeft.join('').match(/^seven/)) {
            leftNum = "7";
            
        }else if (parseLeft.join('').match(/^eight/)) {
            leftNum = "8";
            
        } else if (parseLeft.join('').match(/^nine/)) {
            leftNum = "9";
            
        }else if (parseLeft.join('').match(/^zero/)) {
            leftNum = "0";
            
        }
            
        
        parseLeft.shift();

    }
    while (!rightNum){
        if (parseRight[parseRight.length-1].match(/\d/)) {
            rightNum = parseRight[parseRight.length-1];
            
        } else if (parseRight.join('').match(/one$/)) {
            rightNum = "1";
            
        } else if (parseRight.join('').match(/two$/)) {
            rightNum = "2";
            
        }else if (parseRight.join('').match(/three$/)) {
            rightNum = "3";
            
        }else if (parseRight.join('').match(/four$/)) {
            rightNum = "4";
            
        }else if (parseRight.join('').match(/five$/)) {
            rightNum = "5";
            
        }else if (parseRight.join('').match(/six$/)) {
            rightNum = "6";
            
        }else if (parseRight.join('').match(/seven$/)) {
            rightNum = "7";
            
        }else if (parseRight.join('').match(/eight$/)) {
            rightNum = "8";
            
        } else if (parseRight.join('').match(/nine$/)) {
            rightNum = "9";
            
        }else if (parseRight.join('').match(/^zero/)) {
            rightNum = "0";
            
        }
            
        
        parseRight.pop();

    }   
console.log(leftNum, rightNum);
    calibAnswer += parseInt(leftNum + rightNum);
});


console.log(calibAnswer);



