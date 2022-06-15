const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let result = 0;

for (let i = 1; i <= Number(input[0]); i++) {
  result += Number(input[i]);
}

console.log(result - Number(input[0]) + 1);
