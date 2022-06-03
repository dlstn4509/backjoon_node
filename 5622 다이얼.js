const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('');

let tel = { ABC: 2, DEF: 3, GHI: 4, JKL: 5, MNO: 6, PQRS: 7, TUV: 8, WXYZ: 9 };
let cnt = 0;

for (let v of input) {
  for (let [key, val] of Object.entries(tel)) {
    if (key.includes(v)) {
      cnt += val + 1;
    }
  }
}

console.log(cnt);
