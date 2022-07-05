const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let arr = input[1].split(' ').map((v) => Number(v));
let result = 0;

for (let i = 0; i <= Number(input[0]) - 1; i++) {
  // console.log(arr[i]);
  let cnt = 0;
  for (let j = i + 1; j <= Number(input[0]) - 1; j++) {
    if (arr[i] > arr[j]) {
      cnt += 1;
    } else {
      break;
    }
  }
  if (cnt > result) {
    result = cnt;
  }
}

console.log(result);
