const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();
let result = [];
let asd = 0;

for (let i = 0; i < input.length; i++) {
  Number(input[i]) === 0 ? result.pop() : result.push(Number(input[i]));
}

for (let v of result) {
  asd += v;
}

console.log(asd);
