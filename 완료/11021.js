const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

for (let i = 1; i <= input[0]; i++) {
  let arr = input[i].split(' ');
  console.log(`Case #${i}: ${Number(arr[0]) + Number(arr[1])}`);
}
