const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');
let cnt = 0;
for (let v of input) {
  if (v !== '') {
    cnt += 1;
  }
}

console.log(cnt);
