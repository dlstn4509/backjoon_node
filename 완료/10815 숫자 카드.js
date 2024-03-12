const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let arr = new Set(input[1].split(' '));
let arr2 = input[3].split(' ');
let result = [];

for (let v of arr2) {
  // if (arr.includes(v)) {
  //   result.push(1);
  // } else {
  //   result.push(0);
  // }
  arr.has(v) ? result.push(1) : result.push(0);
}

console.log(result.join(' '));
