const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let arr = input.map((v) => Number(v));
let obj = {};

let avg = arr.reduce((a, b) => a + b, 0) / arr.length;
console.log(avg);

arr.forEach((v) => {
  obj[v] = (obj[v] || 0) + 1;
});

console.log(Object.entries(obj).sort((a, b) => b[1] - a[1])[0][0]);
// console.log(Object.values(obj).sort((a, b) => b - a)[0]);
