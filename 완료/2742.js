const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

let a = Number(input[0]);
let b = '';

for (let i = a; i >= 1; i--) {
  b += i + '\n';
}

console.log(b);
