const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let arr = input[1].split('');
let result = 0;

for (let i = 0; i < Number(input[0]); i++) {
  result += Number(arr[i]);
}

console.log(result);
