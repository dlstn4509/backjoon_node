const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map((v) => Number(v));

let result = new Set();
for (let i = 0; i < input.length; i++) {
  if (input[i + 1]) {
    result.add(input[i + 1] - input[i]);
  }
}
let a = [...result];

a.length === 1 ? (a[0] === 1 ? console.log('ascending') : console.log('descending')) : console.log('mixed');
