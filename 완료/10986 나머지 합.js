const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [a, b] = input[0].split(' ').map((v) => Number(v));
let arr = input[1].split(' ').map((v) => Number(v));
let result = 0;

for (let i = 0; i < a; i++) {
  let sum = 0;
  for (let j = i; j < a; j++) {
    sum += arr[j];
    console.log(sum);
    if (sum % 3 === 0) {
      result += 1;
    }
  }
}

console.log(result);
