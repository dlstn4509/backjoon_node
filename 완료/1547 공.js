const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let ball = '1';

for (let i = 1; i <= Number(input[0]); i++) {
  let arr = input[i].split(' ');
  if (arr.includes(ball)) {
    for (let v of arr) {
      if (ball !== v) {
        ball = v;
        break;
      }
    }
  }
}

console.log(ball);
