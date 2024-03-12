const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

let a = Number(input[0]);
let b = Number(input[1]);

a = a === 0 && b >= 45 ? 0 : a === 0 ? 23 : b >= 45 ? a : a - 1;
b = b >= 45 ? b - 45 : b + 60 - 45;

console.log(a + ' ' + b);
