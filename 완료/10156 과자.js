const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split(' ');
let [a, b, c] = input.map((v) => Number(v));

console.log(a * b - c > 0 ? a * b - c : 0);
