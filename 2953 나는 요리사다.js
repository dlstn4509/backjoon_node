const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let result = [0, 0];

for (let i = 0; i < input.length; i++) {
  let arr = input[i].split(' ').map((v) => Number(v));
  let sum = arr.reduce((a, b) => a + b, 0);
  if (result[1] < sum) {
    result = [i + 1, sum];
  }
}
console.log(result.join('\n'));
