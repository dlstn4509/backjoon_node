const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

for (let i = 1; i <= Number(input[0]); i++) {
  let arr = input[i].split('');
  let left = 0;
  let right = 0;
  for (let v of arr) {
    v === '(' ? (left += 1) : (right += 1);
  }
  console.log(left === right ? 'YES' : 'NO');
}
