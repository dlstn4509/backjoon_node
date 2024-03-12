const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

for (let i = 0; i < input.length - 1; i++) {
  let arr = input[i].split(' ');
  console.log(Number(arr[0]) + Number(arr[1]));
}
