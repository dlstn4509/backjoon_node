const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let a = input[0].split(' ');
let b = input[1].split(' ');
for (let i = 0; i < Number(a[0]); i++) {
  if (Number(a[1]) > Number(b[i])) {
    console.log(b[i]);
  }
}
