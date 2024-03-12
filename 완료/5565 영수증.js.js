const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((v) => Number(v));
let result = input[0];
for (let i = 1; i < input.length; i++) {
  result -= input[i];
}
console.log(result);
