const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => Number(v));

for (let i = 1; i <= input[0]; i++) {
  let result = [0, 0, 0, 0];
  let num = input[i];
  if (num >= 25) {
    result[0] += Math.floor(num / 25);
    num = num % 25;
  }
  if (num >= 10) {
    result[1] += Math.floor(num / 10);
    num = num % 10;
  }
  if (num >= 5) {
    result[2] += Math.floor(num / 5);
    num = num % 5;
  }
  if (num >= 1) {
    result[3] += Math.floor(num / 1);
  }
  console.log(result.join(' '));
}
