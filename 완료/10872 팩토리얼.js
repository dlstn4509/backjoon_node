const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim();

let num = Number(input);
let result = 1;
let cnt = 0;

while (num > cnt) {
  result += result * cnt;
  cnt += 1;
}
console.log(result);
