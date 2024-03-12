const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split(' ');
let left = input[0].split('').map((v) => Number(v));
let right = input[1].split('').map((v) => Number(v));
let result = 0;

for (let v of left) {
  for (let j of right) {
    result += v * j;
  }
}

console.log(result);
