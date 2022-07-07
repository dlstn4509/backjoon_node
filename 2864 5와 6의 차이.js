const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

let [a, b] = input.map((v) => Number(v));
let aArr = a.toString().split('');
let bArr = b.toString().split('');

let aTxt = '';
let bTxt = '';

for (let v of aArr) {
  if (v === '5') {
    aTxt += '6';
  } else {
    aTxt += v.toString();
  }
}

for (let v of bArr) {
  if (v === '5') {
    bTxt += '6';
  } else {
    bTxt += v.toString();
  }
}

let max = Number(aTxt) + Number(bTxt);

aTxt = '';
bTxt = '';

for (let v of aArr) {
  if (v === '6') {
    aTxt += '5';
  } else {
    aTxt += v.toString();
  }
}

for (let v of bArr) {
  if (v === '6') {
    bTxt += '5';
  } else {
    bTxt += v.toString();
  }
}

let min = Number(aTxt) + Number(bTxt);

console.log(`${min} ${max}`);
