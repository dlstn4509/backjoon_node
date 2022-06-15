const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((v) => Number(v));
let sum = 0;
for (let v of input) {
  sum += v;
}
console.log(sum);
for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j < input.length; j++) {
    if (sum - 100 === input[i] + input[j]) {
      let arr = input.filter((v) => v !== input[i]);
      console.log(arr.filter((v) => v !== input[j]).join('\n'));
    }
  }
}
