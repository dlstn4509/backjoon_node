const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(' ')
  .map((v) => BigInt(v));

let [a, b] = input;
let result = [];

for (let i = a + BigInt(1); i < b; i++) {
  result.push(i);
}

console.log(result.length.toString() + '\n' + result.join(' ').toString());
