const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

for (let i = 0; i < input.length - 1; i++) {
  let arr = input[i]
    .split(' ')
    .map((v) => Number(v))
    .sort((a, b) => a - b);
  let a = arr[0] * arr[0];
  let b = arr[1] * arr[1];
  let c = arr[2] * arr[2];
  if (c - a - b === 0) {
    console.log('right');
  } else {
    console.log('wrong');
  }
}
