const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim();
let arr = input.split('').map((v) => Number(v));

let obj = { 0: 0, 1: 0 };

let i = 0;
let chk = 0;

while (true) {
  let bol = true;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        bol = false;
        break;
      }
    }
  }
  if (bol) {
    break;
  }
  if (i === 0) {
    obj[arr[i]] += 1;
    chk = arr[0];
  }
  if (arr[i] !== chk) {
    obj[arr[i]] += 1;
    chk = arr[i];
  }
  i += 1;
  if (arr[i] === undefined) {
    break;
  }
}
let asd = [];
for (let v of Object.values(obj)) {
  asd.push(v);
}

console.log(Math.min(...asd));
