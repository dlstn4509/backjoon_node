const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

for (let i = 1; i <= Number(input[0]); i++) {
  let result = BigInt(input[i]).toString() % 2;
  console.log(typeof result);
  console.log(result === 0 ? 'even' : 'odd');
}
