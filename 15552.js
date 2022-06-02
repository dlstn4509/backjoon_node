const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let res = '';

for (let i = 1; i <= Number(input[0]); i++) {
  let arr = input[i].split(' ');
  res += Number(arr[0]) + Number(arr[1]) + '\n';
}

console.log(res);
