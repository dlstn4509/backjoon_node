const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [a, b] = input[0].split(' ').map((v) => Number(v));
let arr = input[1].split(' ').map((v) => Number(v));

let result = 0;
let cnt = 0;

while (true) {
  let chk = 0;
  for (let i = cnt; i < cnt + b; i++) {
    chk += arr[i];
  }
  if (result === 0) {
    result = chk;
  }
  if (chk > result) {
    result = chk;
  }
  if (arr[cnt + b] === undefined) {
    break;
  }
  cnt += 1;
}

console.log(result);
