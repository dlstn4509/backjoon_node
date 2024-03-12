const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let result = [];

for (let i = 1; i <= Number(input[0]); i++) {
  result.push(input[i].split(' '));
}
result.sort((a, b) => a[1] - b[1]).sort((a, b) => a[0] - b[0]);
let aa = '';
for (let v of result) {
  aa += v.join(' ') + '\n';
}
console.log(aa);
