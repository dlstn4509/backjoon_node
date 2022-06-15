const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((v) => Number(v));

for (let i = 1; i <= 30; i++) {
  if (!input.includes(i)) {
    console.log(i);
  }
}
