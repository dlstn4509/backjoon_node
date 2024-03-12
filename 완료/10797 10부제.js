const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let day = Number(input[0]);
let result = 0;

for (let v of input[1].split(' ')) {
  if (Number(v) === day) {
    result += 1;
  }
}

console.log(result);
