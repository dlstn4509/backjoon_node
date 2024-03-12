const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString();

let num = 1000 - Number(input);

// console.log(num % 100);
// console.log(Math.floor(num / 100));

let result = 0;
while (true) {
  if (num >= 500) {
    result += 1;
    num -= 500;
  } else if (num >= 100) {
    result += Math.floor(num / 100);
    num = num % 100;
  } else if (num >= 50) {
    result += Math.floor(num / 50);
    num = num % 50;
  } else if (num >= 10) {
    result += Math.floor(num / 10);
    num = num % 10;
  } else if (num >= 5) {
    result += Math.floor(num / 5);
    num = num % 5;
  } else if (num >= 1) {
    result += num;
    num = 0;
  }
  if (num === 0) {
    console.log(result);
    break;
  }
}
