const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

let sum = 0;

for (let v of input) {
  sum += Math.pow(Number(v), 2);
}

console.log(sum % 10);
