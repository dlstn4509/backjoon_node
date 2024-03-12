const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let obj = {};

for (let i = 1; i <= Number(input[0]); i++) {
  let word = input[i].split('')[0];
  obj[word] = (obj[word] || 0) + 1;
}
let result = [];
for (let [key, val] of Object.entries(obj)) {
  if (val >= 5) {
    result.push(key);
  }
}

console.log(result.length > 0 ? result.sort().join('') : 'PREDAJA');
