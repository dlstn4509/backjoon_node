const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let arr = input[1].split(' ');

console.log(Math.max(...arr) - Math.min(...arr));
