const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().split(' ');

let a = Number(input[0]);
let b = Number(input[1]);

console.log(a > b ? '>' : a < b ? '<' : '=='); // 1번

// 2번
if (a > b) {
  console.log('>');
} else if (a < b) {
  console.log('<');
} else {
  console.log('==');
}
