const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let totalNum = Number(input[0].split(' ')[0]); // 총 인원
let maxRoomCnt = Number(input[0].split(' ')[1]); // 방당 인원
let result = 0;

let obj = {
  1: { 0: 0, 1: 0 }, // 학년: {여, 남}
  2: { 0: 0, 1: 0 },
  3: { 0: 0, 1: 0 },
  4: { 0: 0, 1: 0 },
  5: { 0: 0, 1: 0 },
  6: { 0: 0, 1: 0 },
};

for (let i = 1; i <= totalNum; i++) {
  let arr = input[i].split(' ');
  obj[arr[1]][arr[0]] += 1;
}

for (let v of Object.entries(obj)) {
  for (let val of Object.values(v[1])) {
    result += Math.ceil(val / maxRoomCnt);
  }
}
console.log(result);
