const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let arr = [];
let result = [];

for (let i = 1; i <= Number(input[0]); i++) {
  let word = input[i].split(' ');
  if (word[0] === 'push') {
    arr.unshift(word[1]);
  } else if (word[0] === 'top') {
    arr.length ? result.push(arr[0]) : result.push(-1);
  } else if (word[0] === 'size') {
    result.push(arr.length);
  } else if (word[0] === 'empty') {
    arr.length ? result.push(0) : result.push(1);
  } else if (word[0] === 'pop') {
    if (arr.length) {
      result.push(arr[0]);
      arr.shift();
    } else {
      result.push(-1);
    }
  }
}
console.log(result.join('\n'));
