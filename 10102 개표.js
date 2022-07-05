const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let arr = input[1].split('');
let obj = { A: 0, B: 0 };

arr.forEach((v) => {
  obj[v] += 1;
});

console.log(obj.A > obj.B ? 'A' : obj.A < obj.B ? 'B' : 'Tie');
