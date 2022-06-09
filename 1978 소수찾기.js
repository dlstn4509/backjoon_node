const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let cnt = Number(input[0]);
let arr = input[1].split(' ');

for (let i = 0; i < Number(input[0]); i++) {
  if (arr[i] > 1) {
    for (let j = 2; j < arr[i]; j++) {
      if (arr[i] % j === 0) {
        cnt -= 1;
        break;
      }
    }
  } else {
    cnt -= 1;
  }
}

console.log(cnt);
