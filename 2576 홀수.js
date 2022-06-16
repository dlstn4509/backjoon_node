const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let resultArr = [];
let result = 0;

for (let v of input) {
  if (v % 2 !== 0) {
    resultArr.push(v);
    result += Number(v);
  }
}

if (resultArr.length) {
  console.log(result);
  console.log(Math.min(...resultArr));
} else {
  console.log(-1);
}
