const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim();
let cnt = 1;
let sum = 1;

while (sum < Number(input)) {
  sum += 6 * cnt;
  cnt += 1;
}
console.log(cnt);
