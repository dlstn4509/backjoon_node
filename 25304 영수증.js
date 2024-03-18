const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const total = Number(input[0])
const count = Number(input[1])
let sum = 0;

for (let i = 2; i < count + 2; i++) {
  const target = input[i].split(' ').map((v) => Number(v))
  sum += target[0] * target[1]
}

if (sum === total) {
  console.log('Yes');
} else {
  console.log('No');
}
