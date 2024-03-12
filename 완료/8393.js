const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

let a = Number(input[0]);
let b = 0;

for (let i = 1; i <= a; i++) {
  b += i;
}

console.log(b);
