const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim();

let num = Number(input);
let length = 2 * num - 1;
let arr = [];

for (let i = 1; i <= num; i++) {
  let empty = length - (2 * i - 1);
  arr.push(' '.repeat(empty / 2) + '*'.repeat(2 * i - 1));
}
console.log(arr.join('\n'));
