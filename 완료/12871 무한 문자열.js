const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .sort((a, b) => a.length - b.length);

let [a, b] = input;
let chk = '';
while (true) {
  if (chk.length >= b.length) {
    break;
  }
  chk += a;
}

console.log(chk === b ? 1 : 0);
