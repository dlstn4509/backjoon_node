const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('');
let result = [
  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
];

for (let i = 0; i < input.length; i++) {
  if (result[input[i].charCodeAt() - 97] === -1) {
    result[input[i].charCodeAt() - 97] = i;
  }
}

console.log(result.join(' '));
