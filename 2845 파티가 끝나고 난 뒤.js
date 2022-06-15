const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let [a, b] = input[0].split(' ').map((v) => Number(v));
let total = a * b;
let result = [];
for (let v of input[1].split(' ')) {
  result.push(v - total);
}

console.log(result.join(' '));
