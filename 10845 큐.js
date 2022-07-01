const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' '));
input.shift();
let arr = [];
let result = [];

for (let v of input) {
  if (v[0] === 'push') {
    arr.push(v[1]);
  } else if (v[0] === 'pop') {
    result.push(arr[0] ? arr.shift() : -1);
  } else if (v[0] === 'size') {
    result.push(arr.length);
  } else if (v[0] === 'empty') {
    result.push(arr.length ? 0 : 1);
  } else if (v[0] === 'front') {
    result.push(arr[0] ? arr[0] : -1);
  } else {
    result.push(arr[arr.length - 1] ? arr[arr.length - 1] : -1);
  }
}
console.log(result.join('\n'));
