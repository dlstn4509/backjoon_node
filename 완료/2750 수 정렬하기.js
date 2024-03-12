const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = Number(input[0]);
let arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

console.log(arr.sort((a, b) => a - b).join('\n'));
