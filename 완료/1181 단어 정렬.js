const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let result = input;
result.shift();
Array.from(new Set(result))
  .sort((a, b) => (a > b ? 1 : a < b ? -1 : 0))
  .sort((a, b) => a.length - b.length)
  .forEach((i) => console.log(i));
// let aa = Array.from(new Set(...result))
//   .sort((a, b) => (a > b ? 1 : a < b ? -1 : 0))
//   .sort((a, b) => a.length - b.length);

// console.log(aa);
// let arr = new Set();
// for (let v of result) {
//   arr.add(v);
// }
// console.log([...arr].join('\n'));
