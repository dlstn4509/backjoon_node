const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [a, aArr, b, bArr] = input.map((v) => v.split(' '));
let result = [];

bArr = new Set(bArr);

for (let v of bArr) {
  let cnt = 0;
  for (let vv of aArr) {
    if (v === vv) {
      cnt += 1;
    }
  }
  result.push(cnt);
}

console.log(result.join(' '));
// console.log(aArr);
