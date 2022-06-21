const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim();

let num = Number(input);

let sum = 0;
let cnt = 0;

while (true) {
  if (num < 10) {
    break;
  }
  cnt += 1;
  let arr = num
    .toString()
    .split('')
    .map((v) => Number(v));
  num = 0;
  for (let v of arr) {
    num += v;
  }
}

console.log(cnt);
console.log(num % 3 === 0 ? 'YES' : 'NO');
