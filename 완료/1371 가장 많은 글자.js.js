const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let result = {};

for (let v of input) {
  let arr = v.trim().split('');
  arr.forEach((vv) => {
    result[vv] = (result[vv] || 0) + 1;
  });
}
let a = Object.entries(result).sort((a, b) => b[1] - a[1]);
if (a[0][0] === ' ') {
  a.shift();
}
let aa = [];
for (let v of a) {
  aa.push(v[1]);
}
let maxNum = Math.max(...aa);
let asd = [];
for (let v of a) {
  if (v[1] === maxNum) {
    asd.push(v[0]);
  }
}
asd = asd.sort().join('');
console.log(asd);
