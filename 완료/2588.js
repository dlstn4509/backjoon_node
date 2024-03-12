const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let a = Number(input[0]);
let b = Number(input[1]);
let c = input[1].split('');

for (let i = 2; i >= 0; i--) {
  console.log(c[i] * a);
}
console.log(a * b);
