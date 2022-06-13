const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');
let [a, b] = input.map((v) => Number(v));

console.log(b * 2 - a);
