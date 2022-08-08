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

// console.log(fib(num)); // 5

const fibonacci = (n) => {
  let arr = [0, 1, 1];
  let cnt = 0;
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
    cnt += 1;
  }
  return cnt;
};

console.log(fib(num) + ' ' + fibonacci(num));
