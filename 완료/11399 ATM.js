const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let arr = input[1].split(' ').sort((a, b) => a - b);
let result = 0;
let arr2 = [];

for (let i = 0; i < Number(input[0]); i++) {
  result += Number(arr[i]);
  for (let j = 0; j < arr2.length; j++) {
    result += arr2[j];
  }
  arr2.push(Number(arr[i]));
}
console.log(result);
