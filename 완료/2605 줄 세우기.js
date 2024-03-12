const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let arr = input[1].split(' ').map((v) => Number(v));
let result = [1];

for (let i = 1; i < Number(input[0]); i++) {
  if (arr[i] === 0) {
    result.splice(arr[i] + i, 0, i + 1);
  } else {
    result.splice(arr[i] - i, 0, i + 1);
  }
}
console.log(result.join(' '));

// let arr = [0, 1];
// arr.splice(1, 0, 'a');
