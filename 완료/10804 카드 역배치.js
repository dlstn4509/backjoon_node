const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let result = [];

for (let i = 1; i <= 20; i++) {
  result.push(i);
}

for (let v of input) {
  let [a, b] = v.split(' ');
  let arr = [];
  for (let i = a - 1; i < b; i++) {
    arr.push(result[i]);
  }
  arr.reverse();
  for (let i = a - 1; i < b; i++) {
    result.splice(i, 1, arr[i - a + 1]);
  }
}

console.log(result.join(' '));
