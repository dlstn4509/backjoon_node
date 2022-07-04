const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim();

let num = Number(input);
let arr = num.toString().split('');

if (!arr.includes('0')) {
  console.log(-1);
} else {
  let sum = arr.reduce((a, b) => Number(a) + Number(b), 0);
  if (sum % 3 !== 0) {
    console.log(-1);
  } else {
    console.log(BigInt(arr.sort((a, b) => b - a).join('')).toString());
  }
}
