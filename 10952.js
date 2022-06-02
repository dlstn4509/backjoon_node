const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

for (let i = 0; i < input.length - 1; i++) {
  if (Number(input[i].split(' ')[0]) === 0 && Number(input[i].split(' ')[1]) === 0) {
    break;
  }
  let a = Number(input[i].split(' ')[0]) + Number(input[i].split(' ')[1]);
  console.log(a);
}
