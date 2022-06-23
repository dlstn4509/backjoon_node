const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let word = input[0];

let result = 0;

for (let i = 2; i <= Number(input[1]) + 1; i++) {
  let chk = input[i] + input[i];
  if (chk.includes(word)) {
    result += 1;
  } else if (chk.split('').reverse().join('').includes(word)) {
    result += 1;
  }
}

console.log(result);
