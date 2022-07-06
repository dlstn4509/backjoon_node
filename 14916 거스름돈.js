const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim();
let num = Number(input);

let result = 0;

if (num % 2 === 1) {
  if (num % 5 === 0) {
    result = num / 5;
    num = 0;
  }
  if (num >= 5) {
    result += Math.floor((num - 5) / 5);
    num -= 5 * result;
  }
  if (num >= 2) {
    result += num / 2;
    num = 0;
  }
} else {
  if (num > 5) {
    if ((num % 5) % 2 === 0) {
      result += Math.floor(num / 5);
      num -= 5 * Math.floor(num / 5);
    } else {
      result += Math.floor(num - 5 / 5);
      num -= 5 * Math.floor(num - 5 / 5);
    }
  }
  if (num >= 2) {
    result += num / 2;
    num = 0;
  }
}

// while (num !== 0) {

// }

console.log(result);
