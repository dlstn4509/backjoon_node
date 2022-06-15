const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().split('');
let AArr = [
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
let aArr = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

let result = '';

for (let i = 0; i < input.length; i++) {
  let type = AArr.includes(input[i]) ? AArr : aArr.includes(input[i]) ? aArr : '';
  if (type) {
    for (let j = 0; j < type.length; j++) {
      if (input[i] === type[j]) {
        let idx = j >= 13 ? j - 13 : j + 13;
        result += type[idx];
      }
    }
  } else {
    result += input[i];
  }
}

console.log(result);
