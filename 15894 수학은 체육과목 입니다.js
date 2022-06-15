const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString();
let num = Number(input);
// let result = (num*2) +
console.log(num * 4);
