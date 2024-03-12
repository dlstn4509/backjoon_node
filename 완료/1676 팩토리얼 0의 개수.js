const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim();
let num = Number(input);

let sum = 1;

for (let i = 1; i <= num; i++) {
  sum = sum * i;
}
console.log(sum);

let sumArr = sum.toString().split('').reverse();
// console.log(sum);
// console.log(sumArr);
let result = 0;
for (let v of sumArr) {
  if (v !== '0') {
    break;
  }
  result += 1;
}

console.log(num === 0 ? 0 : result);
