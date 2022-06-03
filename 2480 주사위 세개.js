const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

let result = {};

input.forEach((v) => {
  result[v] = (result[v] || 0) + 1;
});

let arr = Object.values(result);
let count = Math.max(...arr);

for (let [key, val] of Object.entries(result)) {
  if (val === count && count > 1) {
    if (val === 3) {
      console.log(10000 + key * 1000);
    } else if (val === 2) {
      console.log(1000 + key * 100);
    }
  } else if (count === 1) {
    console.log(Math.max(...input) * 100);
    break;
  }
}
