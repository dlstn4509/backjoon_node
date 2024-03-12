const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

let arr = [];
arr.push(Number(input[0].split('').reverse().join('')));
arr.push(Number(input[1].split('').reverse().join('')));
console.log(Math.max(...arr));
