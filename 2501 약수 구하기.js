const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split(' ');
let [a, b] = input.map((v) => Number(v));
let cnt = 0;
let result = '';

for (let i = 1; i <= a; i++) {
  if (a % i === 0) {
    cnt += 1;
  }
  if (cnt === b) {
    result = i;
    break;
  }
}

console.log(result ? result : 0);
