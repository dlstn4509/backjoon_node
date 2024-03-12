const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

for (let i = 1; i <= Number(input[0]); i++) {
  let arr = input[i].split(' ');
  let result = [];
  for (let j = 0; j < arr.length; j++) {
    result.push(arr[j].split('').reverse().join(''));
  }
  console.log(result.join(' '));
}
