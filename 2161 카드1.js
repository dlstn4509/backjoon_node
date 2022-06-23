const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim();
let num = Number(input);
let arr = [];
let result = [];

for (let i = 1; i <= num; i++) {
  arr.push(i);
}
while (true) {
  result.push(arr.shift());
  arr.push(arr.shift());
  if (arr.length === 1) {
    result.push(arr[0]);
    break;
  }
}
console.log(result.join(' '));
