const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let arr = new Set();

for (let v of input) {
  arr.add(Number(v) % 42);
}

console.log(arr.size);
