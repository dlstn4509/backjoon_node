const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim();

let num = Number(input);
let result = 0;
let cnt = 1;

while (true) {
  result += cnt;
  if (result >= num) {
    break;
  }
  cnt += 1;
}

console.log(cnt - 1);
