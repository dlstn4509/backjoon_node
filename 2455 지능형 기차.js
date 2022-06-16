const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let resultArr = [0];

for (let v of input) {
  let [a, b] = v.split(' ').map((v) => Number(v));
  resultArr.push(resultArr[resultArr.length - 1] - a + b);
}

console.log(Math.max(...resultArr));
