const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString();
let num = Number(input);

const fib = (n) => {
  if (n === 1 || n === 2) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
};

const fibonacci = (n) => {
  let arr = [0, 1, 1];
  let num01 = 0;
  let num02 = 1;
  let num03 = 1;
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    num03 = num01 + num02;
    num01 = num02;
    num02 = num03;
    cnt += 1;
  }
  console.log(num01);
  console.log(num02);
  console.log(num03);
  return cnt;
};

// const fibonacci = (n) => {
//   let arr = [0, 1, 1];
//   let cnt = 0;
//   for (let i = 3; i <= n; i++) {
//     arr[i] = arr[i - 1] + arr[i - 2];
//     cnt += 1;
//   }
//   return cnt;
// };

console.log(fib(num) + ' ' + fibonacci(num));
