const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((v) => Number(v));
let result = 0;

for (let i = 1; i <= input[0]; i++) {
  result += input[i] === 1 ? 1 : -1;
}

console.log(result > 0 ? 'Junhee is cute!' : 'Junhee is not cute!');
