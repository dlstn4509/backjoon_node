const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

for (let i = 1; i <= Number(input[0]); i++) {
  let arr = input[i].split(' ').map((v) => Number(v));
  let sum = 0;
  let arr2 = [];
  for (let v of arr) {
    if (v % 2 === 0) {
      arr2.push(v);
      sum += v;
    }
  }
  console.log(`${sum} ${Math.min(...arr2)}`);
}
