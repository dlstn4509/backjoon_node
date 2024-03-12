const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString();
let num = Number(input);
let result = 5;

for (let i = 0; i < num - 1; i++) {
  result += 7 + 3 * i;
}
console.log(result % 45678);
