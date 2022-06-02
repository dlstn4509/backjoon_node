const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

for (let i = 1; i <= Number(input[0]); i++) {
  let arr = input[i].split(' ');
  let cnt = 0;
  let count = 0;
  for (let j = 1; j <= Number(arr[0]); j++) {
    cnt += Number(arr[j]);
  }
  cnt = cnt / arr[0];
  for (c = 1; c <= Number(arr[0]); c++) {
    if (arr[c] > cnt) {
      count += 1;
    }
  }
  console.log(((count / arr[0]) * 100).toFixed(3) + '%');
}
