const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let a = input[0].split(' ').map((v) => Number(v));
let b = input[1].split(' ').map((v) => Number(v));

let result = 0;

if (a[0] === b[0]) {
  result += a[1] > b[1] ? b[1] : a[1];
} else if (a[0] > b[0]) {
  result += b[0];
  result += a[1];
} else {
  result += a[0];
  result += b[1];
}
console.log(result);
