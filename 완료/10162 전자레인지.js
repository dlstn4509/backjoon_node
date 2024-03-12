const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString();
let num = Number(input);

let a = 0; // 300
let b = 0; // 60
let c = 0; // 10

while (true) {
  if (num >= 300) {
    num -= 300;
    a += 1;
  } else if (num >= 60) {
    num -= 60;
    b += 1;
  } else if (num >= 10) {
    num -= 10;
    c += 1;
  } else if (num < 10) {
    console.log(-1);
    break;
  }
  if (num === 0) {
    console.log(`${a} ${b} ${c}`);
    break;
  }
}
