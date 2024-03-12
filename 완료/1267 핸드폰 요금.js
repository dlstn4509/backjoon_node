const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let arr = input[1].split(' ').map((v) => Number(v));

let y = 0;
let m = 0;

for (let i = 0; i < arr.length; i++) {
  y += Math.floor(arr[i] / 30 + 1) * 10;
  m += Math.floor(arr[i] / 60 + 1) * 15;
}
if (y < m) {
  console.log(`Y ${y}`);
} else if (y > m) {
  console.log(`M ${m}`);
} else {
  console.log(`Y M ${y}`);
}
