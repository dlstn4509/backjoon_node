const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
  let [a, b, c] = input[i].split(' ').map((v) => Number(v));
  let result = 0;
  if (a === 0 && b === 0 && c === 0) {
    break;
  }
  while (true) {
    if (c > a) {
      result += a;
      c -= b;
      if (c <= 0) {
        console.log(`Case ${i + 1}: ${result}`);
        break;
      }
    }
    if (c <= a) {
      result += c;
      c = 0;
    }
    if (c <= 0) {
      console.log(`Case ${i + 1}: ${result}`);
      break;
    }
  }
}
