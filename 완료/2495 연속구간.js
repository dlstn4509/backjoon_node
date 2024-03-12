const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

for (let v of input) {
  let result = 1;
  let arr = v.split('');

  for (let i = 0; i < arr.length; i++) {
    let cnt = 1;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
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
}
