const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let num = input[0] * input[1] * input[2];
let numArr = num.toString().split('');

let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let v of numArr) {
  arr[Number(v)] += 1;
}

for (let v of arr) {
  console.log(v);
}
