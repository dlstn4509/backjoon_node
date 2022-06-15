const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let result = 0;

for (let i = 0; i < 8; i++) {
  let arr = input[i].split('');
  // 처음이 흰색
  if (i % 2 === 0) {
    for (let j = 0; j < 8; j = j + 2) {
      if (arr[j] === 'F') {
        result += 1;
      }
    }
  } else {
    for (let j = 1; j < 8; j = j + 2) {
      if (arr[j] === 'F') {
        result += 1;
      }
    }
  }
}

console.log(result);
