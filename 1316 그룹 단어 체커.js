const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let cnt = 0;

for (let i = 1; i <= Number(input[0]); i++) {
  let arr = input[i].split('');
  let arr2 = [];
  for (let j = 0; j < arr.length; j++) {
    if (!arr2.includes(arr[j]) && arr[j] !== arr[j - 1]) {
      arr2.push(arr[j]);
    } else if (arr2.includes(arr[j]) && arr[j] !== arr[j - 1]) {
      arr2 = [];
      break;
    }
  }
  if (arr2.length) {
    cnt += 1;
  }
}
console.log(cnt);
