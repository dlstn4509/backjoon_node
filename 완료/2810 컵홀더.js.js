const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let result = 1;
let arr = input[1].split('');
for (let v of arr) {
  result += v === 'S' ? 1 : 0.5;
}

console.log(Math.min(result, Number(input[0])));
