const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((v) => Number(v));

let [a, b, c, d, e] = input;
// 방학일, 국어총, 수학총, 국어, 수학
let f = Math.ceil(b / d);
let g = Math.ceil(c / e);

console.log(f >= g ? a - f : a - g);
