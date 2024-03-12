const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';

let numArr = [];

const plus = (n) => {
  let arr = n.toString().split('');
  let cnt = 0;
  cnt += n;
  for (let v of arr) {
    cnt += Number(v);
  }
  numArr.push(cnt);
  return cnt;
};

for (let i = 1; i <= 10000; i++) {
  let a = plus(i);
  if (a >= 11000) {
    break;
  }
}

for (let i = 1; i < numArr.length; i++) {
  if (numArr.indexOf(i) < 0) {
    console.log(i);
  }
}
