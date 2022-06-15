const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split(' ');
let [a, b] = input.map((v) => Number(v));
let arr = [];
let result = 0;

for (let i = 1; i <= b; i++) {
  for (let j = 1; j <= i; j++) {
    arr.push(i);
  }
}

for (let i = a - 1; i < b; i++) {
  result += arr[i];
}

// console.log(arr);
console.log(result);
