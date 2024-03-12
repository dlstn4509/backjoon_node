const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let a = Number(input[0]);

for (let i = 1; i <= a; i++) {
  console.log(Number(input[i].split(' ')[0]) + Number(input[i].split(' ')[1]));
}
