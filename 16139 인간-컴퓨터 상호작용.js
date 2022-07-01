const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let txt = input[0].split('');

for (let i = 2; i < input.length; i++) {
  let [a, b, c] = input[i].split(' ');
  let result = 0;
  for (let j = Number(b); j <= Number(c); j++) {
    if (txt[j] === a) {
      result += 1;
    }
  }
  console.log(result);
}
