const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((v) => Number(v));

let sum = 0;
for (let v of input) {
  sum += v;
}
let min = Math.floor(sum / 60);
let sec = sum - 60 * min;
console.log(min + '\n' + sec);
