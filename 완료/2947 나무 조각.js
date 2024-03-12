const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

let arr = input.map((v) => Number(v));
let chk = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(chk);
// console.log(JSON.stringify(arr) === JSON.stringify(chk));

// let a = arr[0];
// let b = arr[1];
// arr.splice(1, 1, a);
// console.log(arr);
// arr.splice(0, 1, b);
// console.log(arr);
// console.log(a);

while (true) {
  if (arr[0] > arr[1]) {
    let a = arr[0];
    let b = arr[1];
    arr.splice(1, 1, a);
    arr.splice(0, 1, b);
    console.log(arr.join(' '));
  }
  if (arr[1] > arr[2]) {
    let a = arr[1];
    let b = arr[2];
    arr.splice(2, 1, a);
    arr.splice(1, 1, b);
    console.log(arr.join(' '));
  }
  if (arr[2] > arr[3]) {
    let a = arr[2];
    let b = arr[3];
    arr.splice(3, 1, a);
    arr.splice(2, 1, b);
    console.log(arr.join(' '));
  }
  if (arr[3] > arr[4]) {
    let a = arr[3];
    let b = arr[4];
    arr.splice(4, 1, a);
    arr.splice(3, 1, b);
    console.log(arr.join(' '));
  }
  if (JSON.stringify(arr) === JSON.stringify(chk)) {
    break;
  }
}
