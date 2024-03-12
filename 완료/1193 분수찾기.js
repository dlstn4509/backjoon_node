const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim(); // 4
let a = Number(input);

let cnt = 1;

while (true) {
  a -= cnt;
  if (a <= 0) {
    a += cnt;
    break;
  }
  cnt++;
}

if (cnt % 2 === 1) {
  console.log(`${cnt - (a - 1)}/${1 + (a - 1)}`);
} else {
  console.log(`${1 + (a - 1)}/${cnt - (a - 1)}`);
}
