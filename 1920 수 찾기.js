const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let arr = new Set(input[1].split(' '));
let arr2 = input[3].split(' ');

arr2.forEach((v) => console.log(arr.has(v) ? 1 : 0));
