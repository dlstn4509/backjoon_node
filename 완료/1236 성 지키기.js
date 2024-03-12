const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let result = Number(input[0].split(' ')[0]);

for (let i = 1; i <= Number(input[0].split(' ')[0]); i++) {
  let arr = input[i].split('');
  let bol = false;
  for (let v of arr) {
    if (v === 'X') {
      bol = true;
      break;
    }
  }
  if (bol) {
    result -= 1;
  }
}

console.log(result);
