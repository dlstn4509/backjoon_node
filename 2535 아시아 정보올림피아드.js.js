const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' '))
  .sort((a, b) => b[2] - a[2]);
input.shift();

let obj = {};
let result = [];

for (let v of input) {
  obj[v[0]] = (obj[v[0]] || 0) + 1;
  if (obj[v[0]] < 3) {
    result.push([v[0], v[1]]);
  }
  if (result.length === 3) {
    break;
  }
}

for (let v of result) {
  console.log(v.join(' '));
}
