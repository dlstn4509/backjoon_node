const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => Number(v));

let arr = [0, 1, 2, 4];
for (let i = 4; i <= 10; i++) {
  arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
}
for (let i = 1; i <= input[0]; i++) {
  console.log(arr[input[i]]);
}
