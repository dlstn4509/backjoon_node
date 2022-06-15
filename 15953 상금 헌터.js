const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let first = { 1: 5000000, 3: 3000000, 6: 2000000, 10: 500000, 15: 300000, 21: 100000 };
let second = { 1: 5120000, 3: 2560000, 7: 1280000, 15: 640000, 31: 320000 };

for (let i = 1; i <= Number(input[0]); i++) {
  let result = 0;
  let arr = input[i].split(' ');
  if (arr[0] !== '0') {
    for (let [key, val] of Object.entries(first)) {
      if (Number(arr[0]) <= Number(key)) {
        result += val;
        break;
      }
    }
  }
  if (arr[1] !== '0') {
    for (let [key, val] of Object.entries(second)) {
      if (Number(arr[1]) <= Number(key)) {
        result += val;
        break;
      }
    }
  }
  console.log(result);
}
