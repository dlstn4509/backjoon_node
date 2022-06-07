const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');
let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

let aa = a / (c - b);
let ss = Math.floor(aa) + 1;
console.log(b >= c ? -1 : ss);
