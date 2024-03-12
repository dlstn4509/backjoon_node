const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let numArr = input[1].split(' ');
let maxNum = Math.max(...numArr);
let plusNum = 0;

for (let i = 0; i < Number(input[0]); i++) {
  plusNum += (Number(numArr[i]) / maxNum) * 100;
}

console.log(plusNum / Number(input[0]));
