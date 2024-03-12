const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let arr = input[1].split(' ');
let numArr = [];
for (let v of arr) {
  numArr.push(Number(v));
}
console.log(`${Math.min(...numArr)} ${Math.max(...numArr)}`);
