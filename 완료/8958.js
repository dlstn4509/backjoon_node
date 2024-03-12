const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

for (let i = 1; i <= Number(input[0]); i++) {
  let cnt = 0;
  let arr = input[i].split('');
  let plusNum = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === 'O') {
      plusNum += 1;
      cnt += plusNum;
    } else {
      plusNum = 0;
    }
  }
  console.log(cnt);
}
