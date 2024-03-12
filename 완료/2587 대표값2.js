const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let arr = input.map((v) => Number(v)).sort((a, b) => a - b);

console.log(arr.reduce((a, b) => a + b) / 5);
console.log(arr[2]);
