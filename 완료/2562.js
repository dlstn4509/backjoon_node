const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let numArr = [];

for (let v of input) {
  numArr.push(Number(v));
}

let maxNum = Math.max(...numArr);

for (let i = 0; i < numArr.length; i++) {
  if (maxNum === numArr[i]) {
    console.log(maxNum);
    console.log(i + 1);
  }
}
