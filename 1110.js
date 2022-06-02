const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString(); // 26

let addN = 0;
let count = 0;
let N = +input;
let isNotSame = true;
while (isNotSame) {
  addN = Math.floor(N / 10) + (N % 10);
  N = (N % 10) * 10 + (addN % 10);
  count++;
  if (N == input) {
    console.log(count);
    isNotSame = false;
  }
}
