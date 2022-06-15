const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let sum = 0;
let arr = [];

for (let v of input) {
  sum += Number(v);
  arr.push(v);
  if (sum >= 100) {
    break;
  }
}

let a = sum;
let b = sum - Number(arr[arr.length - 1]);
// console.log(a);
// console.log(b);
// console.log(Math.abs(100 - a));
// console.log(Math.abs(100 - b));

console.log(Math.abs(100 - a) > Math.abs(100 - b) ? b : a);
