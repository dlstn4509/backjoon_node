const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim();

let num = Number(input);
let length = 2 * num - 1; // 9
let arr = [];

for (let i = num; i >= 1; i--) {
  let empty = ' '.repeat(num - i);
  let star = '*'.repeat(2 * i - 1);
  arr.push(empty + star);
}

for (let i = 2; i <= num; i++) {
  let empty = ' '.repeat(num - i);
  let star = '*'.repeat(2 * i - 1);
  arr.push(empty + star);
}
console.log(arr.join('\n'));
