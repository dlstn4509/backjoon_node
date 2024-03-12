const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let result = '';

for (let i = 1; i <= Number(input[0]); i++) {
  let text = input[i].split('').reverse().join('');
  for (let j = 1; j <= Number(input[0]); j++) {
    if (text === input[j]) {
      result = input[i];
      break;
    }
  }
}
aa = result.split('');
console.log(`${aa.length} ${aa[Math.floor(aa.length / 2)]}`);
