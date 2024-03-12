const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split(' ');
let a = input[0] + input[1];
let b = input[2] + input[3];

console.log(Number(a) + Number(b));
