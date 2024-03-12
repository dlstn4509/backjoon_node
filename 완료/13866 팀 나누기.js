const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

let arr = input.map((v) => Number(v)).sort((a, b) => a - b);

console.log(
  arr[0] + arr[3] - (arr[1] + arr[2]) > 0
    ? arr[0] + arr[3] - (arr[1] + arr[2])
    : arr[1] + arr[2] - (arr[0] + arr[3])
);
