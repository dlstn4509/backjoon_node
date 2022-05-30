const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

let a = Number(input[0]);
let b = '';

for (let i = 1; i <= a; i++) {
  console.log(' '.repeat(a - i) + '*'.repeat(i));
}
