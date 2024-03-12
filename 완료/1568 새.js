const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim();
let num = Number(input);
let result = 0;
let cnt = 1;

while (true) {
  if (cnt > num) {
    cnt = 1;
  }
  num -= cnt;
  cnt += 1;
  result += 1;
  if (num === 0) {
    break;
  }
}

console.log(result);
