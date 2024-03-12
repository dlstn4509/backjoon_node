const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let [a, b] = input.map((v) => Number(v));
let result = [];

for (let i = a; i <= b; i++) {
  if (Number.isInteger(Math.sqrt(i))) {
    result.push(i);
  }
}

if (result.length) {
  console.log(result.reduce((a, b) => a + b, 0));
  console.log(Math.min(...result));
} else {
  console.log(-1);
}
