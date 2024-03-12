const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim();
let num = Number(input);
let arr = [0, 1];

for (let i = 2; i <= num; i++) {
  let sum = arr[0] + arr[1];
  arr.shift();
  arr.push(sum);
}
num === 0 ? console.log(0) : console.log(arr[1]);
