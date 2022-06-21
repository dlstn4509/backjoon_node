const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let arr = new Set();

for (let i = 1; i <= Number(input[0].split(' ')[0]); i++) {
  let a = input[i].split(' ');
  for (let v of a) {
    arr.add(v);
  }
}

console.log([...arr].sort().join(' '));
