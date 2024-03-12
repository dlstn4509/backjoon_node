const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [cardLength, maxNum] = input[0].split(' ').map((v) => Number(v));
let cardArr = input[1].split(' ');
let result = 0;

for (let i = 0; i < cardArr.length; i++) {
  for (let j = i + 1; j < cardArr.length; j++) {
    for (let k = j + 1; k < cardArr.length; k++) {
      let test = Number(cardArr[i]) + Number(cardArr[j]) + Number(cardArr[k]);
      if (test <= maxNum && test > result) {
        result = test;
      }
    }
  }
}

console.log(result);
