const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('');

let chk = 'CAMBRIDGE'.split('');
let result = '';

for (let v of input) {
  if (!chk.includes(v)) {
    result += v;
  }
}
console.log(result);
