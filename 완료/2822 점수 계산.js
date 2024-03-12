const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => Number(v));
let maxArr = [];
for (let v of input) {
  maxArr.push(v);
}
maxArr.sort((a, b) => b - a);
maxArr.pop();
maxArr.pop();
maxArr.pop();

let resultArr = [];
let result = 0;

for (let i = 0; i < input.length; i++) {
  if (maxArr.includes(input[i])) {
    resultArr.push(i + 1);
    result += input[i];
  }
}

console.log(`${result}\n${resultArr.join(' ')}`);
