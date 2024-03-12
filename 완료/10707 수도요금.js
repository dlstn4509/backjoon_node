const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [a, b, c, d, e] = input.map((v) => Number(v));

let X = a * e;
let Y = b;

if (e > c) {
  Y += (e - c) * d;
}

console.log(X >= Y ? Y : X);
