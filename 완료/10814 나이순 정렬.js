const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let result = [];

for (let i = 1; i <= Number(input[0]); i++) {
  result.push(input[i].split(' '));
}
result.sort((a, b) => a[0] - b[0]);
// result.sort((a, b) => ((a[1] > b[1] ? 1 : a[1] < b[1]) ? -1 : 0)).sort((a, b) => a[0] - b[0]);
for (let v of result) {
  console.log(v.join(' '));
}
