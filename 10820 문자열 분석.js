const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input.pop();

for (let v of input) {
  let arr = v.split('');
  let s = 0;
  let b = 0;
  let n = 0;
  let e = 0;
  for (let j of arr) {
    if (j === ' ') {
      e += 1;
    } else if (!isNaN(Number(j))) {
      n += 1;
    } else if (j === j.toUpperCase()) {
      b += 1;
    } else {
      s += 1;
    }
  }
  console.log(`${s} ${b} ${n} ${e}`);
}
