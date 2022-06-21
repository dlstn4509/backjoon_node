const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('')
  .map((v) => Number(v));

console.log(input.sort((a, b) => b - a).join(''));
