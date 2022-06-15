const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('-');

let result = '';
for (let v of input) {
  result += v.split('')[0];
}
console.log(result);
