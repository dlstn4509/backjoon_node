const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

for (let i = 1; i <= Number(input[0]); i++) {
  let [a, b] = input[i].split(' ');
  let arr = b.split('');
  arr.splice(a - 1, 1);
  console.log(arr.join(''));
}
