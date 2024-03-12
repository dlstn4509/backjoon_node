const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let result = [];

for (let i = 0; i < input.length; i++) {
  let arr = input[i].split('');
  result.push(arr);
}

let aaa = '';
for (let i = 0; i <= 15; i++) {
  aaa += result[0][i] ? result[0][i] : '';
  aaa += result[1][i] ? result[1][i] : '';
  aaa += result[2][i] ? result[2][i] : '';
  aaa += result[3][i] ? result[3][i] : '';
  aaa += result[4][i] ? result[4][i] : '';
}
console.log(aaa);
