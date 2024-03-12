const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

let a = Number(input[0]);

let b = '';
if (a >= 90) {
  b = 'A';
} else if (a >= 80) {
  b = 'B';
} else if (a >= 70) {
  b = 'C';
} else if (a >= 60) {
  b = 'D';
} else {
  b = 'F';
}
console.log(b);
