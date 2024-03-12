const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let resultArr = [];

for (let i = 1; i <= Number(input[0]); i++) {
  let arr = input[i].split(' ').map((v) => Number(v));
  let obj = {};
  arr.forEach((v) => {
    obj[v] = (obj[v] || 0) + 1;
  });
  let keyArr = [];
  for (let [key, val] of Object.entries(obj)) {
    if (val === 3) {
      resultArr.push(10000 + Number(key) * 1000);
      break;
    } else if (val === 2) {
      resultArr.push(1000 + Number(key) * 100);
      break;
    } else {
      keyArr.push(key);
    }
  }
  if (keyArr.length > 0) {
    resultArr.push(Math.max(...keyArr) * 100);
  }
}

console.log(Math.max(...resultArr));
