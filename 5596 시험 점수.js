const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let a = input[0]
  .split(' ')
  .map((v) => Number(v))
  .reduce((a, b) => a + b, 0);
let b = input[1]
  .split(' ')
  .map((v) => Number(v))
  .reduce((a, b) => a + b, 0);

console.log(a > b ? a : b);
