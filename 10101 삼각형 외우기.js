const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let [a, b, c] = input.map((v) => Number(v));

if (a + b + c === 180) {
  if (a === 60 && b === 60 && c === 60) {
    console.log('Equilateral');
  } else if (a === b || b === c || c === a) {
    console.log('Isosceles');
  } else {
    console.log('Scalene');
  }
} else {
  console.log('Error');
}
