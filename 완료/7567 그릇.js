const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('');
let result = 10;
console.log(input);
for (let i = 1; i < input.length; i++) {
  if (input[i - 1] === input[i]) {
    result += 5;
  } else {
    result += 10;
  }
}

console.log(result);
