const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('');

let result = 0;
for (let v of input) {
  if (v === 'a' || v === 'e' || v === 'i' || v === 'o' || v === 'u') {
    result += 1;
  }
}

console.log(result);
