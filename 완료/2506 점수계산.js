const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let result = 0;

let arr = input[1].split(' ').map((v) => Number(v));

let cnt = 1;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 1) {
    result += cnt;
    cnt += 1;
  } else {
    cnt = 1;
  }
}

console.log(result);
