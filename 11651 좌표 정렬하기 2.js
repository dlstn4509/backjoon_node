const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();
let arr = input.map((v) => v.split(' '));
let result = arr.sort((a, b) => a[0] - b[0]).sort((a, b) => a[1] - b[1]);
let arr2 = [];
for (let v of result) {
  arr2.push(v.join(' '));
}
console.log(arr2.join('\n'));
