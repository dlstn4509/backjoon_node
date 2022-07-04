const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

for (let i = 1; i <= Number(input[0]); i++) {
  let [a, b] = input[i].split(' ').map((v) => Number(v));
  let cnt = 0;
  while (true) {
    if (b * cnt > a) {
      break;
    } else {
      cnt += 1;
    }
  }
  console.log(`You get ${cnt - 1} piece(s) and your dad gets ${a - b * (cnt - 1)} piece(s).`);
}
