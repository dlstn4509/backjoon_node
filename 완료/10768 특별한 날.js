const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => Number(v));

let [a, b] = input;
if (a > 2) {
  console.log('After');
} else if (a < 2) {
  console.log('Before');
} else {
  if (b === 18) {
    console.log('Special');
  } else if (b > 18) {
    console.log('After');
  } else {
    console.log('Before');
  }
}
