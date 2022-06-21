const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let result = 0;
let chk = 0;

for (let v of input) {
  let [a, b] = v.split(' ').map((v) => Number(v));
  chk = chk - a + b;
  if (chk > result) {
    result = chk;
  }
}
console.log(result);
