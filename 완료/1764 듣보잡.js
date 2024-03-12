const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let [a, b] = input[0].split(' ').map((v) => Number(v));
let arr = new Set();
let result = [];

for (let i = 1; i <= a; i++) {
  arr.add(input[i]);
}

for (let i = a + 1; i <= a + b; i++) {
  if (arr.has(input[i])) {
    result.push(input[i]);
  }
}

console.log(result.length);
console.log(result.sort().join('\n'));
