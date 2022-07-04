const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

for (let i = 1; i <= Number(input[0]); i++) {
  let arr = input[i].toString().split('');
  let revArr = arr.map((v) => v).reverse();
  let sum = Number(arr.join('')) + Number(revArr.join(''));
  let sumArr = sum.toString().split('');
  // console.log(arr);
  // console.log(revArr);
  // console.log(sum);

  let length = sum.toString().length;
  let left = '';
  let right = '';
  if (length % 2 === 0) {
    for (let i = 0; i < length / 2; i++) {
      left += sumArr[i];
    }
    for (let i = length / 2; i < length; i++) {
      right += sumArr[i];
    }
    console.log(left === right.split('').reverse().join('') ? 'YES' : 'NO');
  } else {
    for (let i = 0; i < Math.floor(length / 2); i++) {
      left += sumArr[i];
    }
    for (let i = Math.round(length / 2); i < length; i++) {
      right += sumArr[i];
    }
    console.log(left === right.split('').reverse().join('') ? 'YES' : 'NO');
  }
}
