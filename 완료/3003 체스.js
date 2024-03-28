const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ').map((v) => Number(v));
const base = [1, 1, 2, 2, 2, 8]
let result = []

for (let i = 0; i < input.length; i++) {
  if (input[i] !== base[i]) {
    result.push((base[i] - input[i]));
  } else {
    result.push(0)
  }
}

console.log(result.join(' '))