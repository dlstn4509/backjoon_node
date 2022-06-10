const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let arr = [];

for (let i = 1; i <= Number(input[0]); i++) {
  arr.push(input[i].split(' '));
}
arr.sort((a, b) => b[0] + b[1] - (a[0] + a[1]));
// arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
console.log(arr);
