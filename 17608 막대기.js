const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((v) => Number(v));

let result = [];
for (let i = input.length - 2; i >= 0; i--) {
  if (input[i] > input[input.length - 1] && input[i] > Math.max(...result)) {
    result.push(input[i]);
  }
}
console.log(result.length + 1);
