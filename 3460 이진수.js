const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

for (let i = 1; i <= Number(input[0]); i++) {
  let arr = [];
  let num = input[i];
  while (num !== 0) {
    arr.push(num % 2);
    num = Math.floor(num / 2);
  }
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      result.push(i);
    }
  }
  console.log(result.join(' '));
}
