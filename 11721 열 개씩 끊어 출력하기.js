const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim();

for (let i = 0; i < input.length; i = i + 10) {
  console.log(input.substring(i, i + 10));
}
