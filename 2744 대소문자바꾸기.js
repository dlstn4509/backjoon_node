const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('')

let result = ''

for (let i = 0; i < input.length; i++) {
  if (input[i].toUpperCase() === input[i]) {
    result += input[i].toLowerCase()
  } else {
    result += input[i].toUpperCase()
  }
}

console.log(result);