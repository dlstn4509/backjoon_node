const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

for (let i = 2; i <= Number(input[0]) + 2; i += 2) {
  let sum = input[i]
    .split(' ')
    .map((v) => Number(v))
    .reduce((a, b) => a + b, 0);
  console.log(sum);
}
