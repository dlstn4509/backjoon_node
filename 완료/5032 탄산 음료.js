const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

let [a, b, c] = input.map((v) => Number(v));

let result = 0;
let total = a + b;

while (true) {
  result += Math.floor(total / c);
  total = Math.floor(total / c) + (total % c);
  if (total < c) {
    break;
  }
}

console.log(result);
