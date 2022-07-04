const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

let [a, b] = input.map((v) => Number(v));

let chk = Math.floor((b * 100) / a);
let result = 0;
while (true) {
  if (a === b) {
    console.log(-1);
    break;
  }
  let aa = a + result;
  let bb = b + result;
  if (chk !== Math.floor((bb * 100) / aa)) {
    console.log(result);
    break;
  }
  result += 1;
}
