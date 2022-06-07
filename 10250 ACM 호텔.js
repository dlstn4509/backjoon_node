const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

for (let i = 1; i <= Number(input[0]); i++) {
  let arr = input[i].split(' ');
  let H = Number(arr[0]);
  let W = Number(arr[1]);
  let N = Number(arr[2]);

  let room = Math.ceil(N / H) < 10 ? '0' + Math.ceil(N / H) : Math.ceil(N / H);
  let floor = N % H === 0 ? H : N % H;
  console.log(floor.toString() + room.toString());
}
