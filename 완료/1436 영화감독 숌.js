const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim();

let num = Number(input);
let chk = 665;
let cnt = 0;

while (cnt !== num) {
  chk += 1;
  let str = chk.toString();
  if (str.includes('666')) {
    cnt += 1;
  }
}

console.log(chk);
