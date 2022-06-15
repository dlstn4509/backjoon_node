const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let [a, b] = input.map((v) => Number(v));

a = a.toString().split('');
a.pop();
a.pop();
a.push('0', '0');
a = Number(a.join(''));

for (let i = 0; i <= 99; i++) {
  if ((a + i) % b === 0) {
    console.log(i > 9 ? i : `0${i}`);
    break;
  }
}
