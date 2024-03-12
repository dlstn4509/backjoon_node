const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let A = input[0].split(' ').map((v) => Number(v));
let B = input[1].split(' ').map((v) => Number(v));

let resultA = 0;
let resultB = 0;
let lastWin = 'D';

for (let i = 0; i < 10; i++) {
  if (A[i] > B[i]) {
    resultA += 3;
    lastWin = 'A';
  } else if (A[i] < B[i]) {
    resultB += 3;
    lastWin = 'B';
  } else {
    resultA += 1;
    resultB += 1;
  }
}
console.log(`${resultA} ${resultB}`);
console.log(lastWin);
