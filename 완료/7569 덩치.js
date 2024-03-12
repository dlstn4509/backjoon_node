const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let arr = [];
let result = [];

for (let i = 1; i <= Number(input[0]); i++) {
  arr.push(input[i].split(' '));
}

for (let i = 0; i < arr.length; i++) {
  let cnt = 0;
  for (let j = 0; j < arr.length; j++) {
    if (i !== j) {
      if (arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]) {
        cnt += 1;
      }
    }
  }
  result.push(cnt + 1);
}
console.log(result.join(' '));
