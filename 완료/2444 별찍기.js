const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim()

const number = Number(input)
const count = 2 * number - 1

let result = []

for (let i = 1; i <= count; i++) {
  if ((i * 2 - 1) <= count) {
    result.push(' '.repeat(number - i) + '*'.repeat(i * 2 - 1))
  }
}

for (let i = result.length - 2; i >= 0; i--) {
  result.push(result[i])
}

console.log(result.join('\n'));
