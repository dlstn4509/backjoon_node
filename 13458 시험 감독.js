const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = Number(input[0]); // 시험장 개수
let roomArr = input[1].split(' '); // 시험장당 응시자 수
let [a, b] = input[2].split(' ').map((v) => Number(v)); // 총 감독관, 부 감독관
let result = 0;

for (let i = 0; i < n; i++) {
  result += 1; // 총감독관 (시험장당 1)
  let num = roomArr[i] - a; // 시험장당 응시자 수 - 총 감독관 인원
  if (num > 0) {
    result += Math.ceil(num / b);
  }
}

console.log(result);
