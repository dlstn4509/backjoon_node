const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString();

let a = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

let result = [];
let arr = input.split('');
for (let v of arr) {
  let idx = a.indexOf(v);
  if (idx < 3) {
    result.push(a[26 + idx - 3]);
  } else {
    result.push(a[idx - 3]);
  }
}

console.log(result.join(''));
