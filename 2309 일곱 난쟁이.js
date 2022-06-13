const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let allSum = 0;
for (let v of input) {
  allSum += Number(v);
}

let result = [];
for (let i = 0; i < input.length; i++) {
  let sum = allSum;
  let bol = false;
  for (let j = i + 1; j < input.length; j++) {
    let forSum = Number(input[i]) + Number(input[j]);
    if (sum - forSum === 100) {
      result = input.filter((v) => v !== input[i]);
      result = result.filter((v) => v !== input[j]);
      console.log(result.sort((a, b) => a - b).join('\n'));
      bol = true;
      break;
    }
  }
  if (bol) {
    break;
  }
}
