const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let [cnt, total] = input[0].split(' ').map((v) => Number(v));
let arr = [];
for (let i = 1; i <= Number(input[0].split(' ')[0]); i++) {
  arr.unshift(Number(input[i]));
}
let result = 0;
while (total !== 0) {
  for (let i = 0; i < arr.length; i++) {
    if (total / arr[i] >= 1) {
      result += Math.floor(total / arr[i]);
      total = total % arr[i];
    }
  }
}
console.log(result);
