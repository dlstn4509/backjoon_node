const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let arr = input[1].split(' ').map((v) => Number(v));

if (arr.length === 1) {
  console.log(arr[0] * arr[0]);
} else {
  let arr2 = arr.sort((a, b) => a - b);
  console.log(arr2[0] * arr2[arr.length - 1]);
}
