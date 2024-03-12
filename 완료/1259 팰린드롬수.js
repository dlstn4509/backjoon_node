const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let cnt = 0;

while (true) {
  if (input[cnt] === '0') {
    break;
  }
  let arr = input[cnt];
  let chkArr = arr.split('').reverse().join('');
  if (arr === chkArr) {
    console.log('yes');
  } else {
    console.log('no');
  }
  cnt += 1;
}
