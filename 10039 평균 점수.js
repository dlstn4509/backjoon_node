const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => Number(v));

let sum = 0;
for (let v of input) {
  sum += v < 40 ? 40 : v;
}
console.log(sum / 5);
