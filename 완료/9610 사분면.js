const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let result = { Q1: 0, Q2: 0, Q3: 0, Q4: 0, AXIS: 0 };

for (let i = 1; i <= Number(input[0]); i++) {
  let [a, b] = input[i].split(' ');
  if (a === '0' || b === '0') {
    result.AXIS += 1;
  }
  if (a > 0 && b !== 0) {
    if (b > 0) {
      result.Q1 += 1;
    } else {
      result.Q4 += 1;
    }
  }
  if (a < 0 && a !== 0) {
    if (b > 0) {
      result.Q2 += 1;
    } else {
      result.Q3 += 1;
    }
  }
}
for (let [key, val] of Object.entries(result)) {
  console.log(`${key}: ${val}`);
}
// console.log(result);
