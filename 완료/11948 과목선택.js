const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let arr = input.map((v) => Number(v));
let arr1 = [];
let arr2 = [];
let result = 0;

for (let i = 0; i < 4; i++) {
  arr1.push(arr[i]);
}
for (let i = 4; i < 6; i++) {
  arr2.push(arr[i]);
}
arr1.sort((a, b) => b - a);
arr2.sort((a, b) => b - a);

for (let i = 0; i < 3; i++) {
  result += Number(arr1[i]);
}
for (let i = 0; i < 1; i++) {
  result += Number(arr2[i]);
}

console.log(result);
