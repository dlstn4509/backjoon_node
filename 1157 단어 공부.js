const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('');
let result = {};

input.forEach((v) => {
  v = v.toUpperCase();
  result[v] = (result[v] || 0) + 1;
});

let maxCount = Math.max(...Object.values(result));
let maxWord = [];

for (let [key, val] of Object.entries(result)) {
  if (val === maxCount) {
    maxWord.push(key);
  }
}
console.log(maxWord.length > 1 ? '?' : maxWord[0]);
