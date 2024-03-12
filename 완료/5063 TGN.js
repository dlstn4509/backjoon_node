const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

for (let i = 1; i <= Number(input[0]); i++) {
  let [a, b, c] = input[i].split(' ').map((v) => Number(v));
  let result = b - c;
  console.log(a > result ? 'do not advertise' : a < result ? 'advertise' : 'does not matter');
}
// advertise
// do not advertise
// does not matter
