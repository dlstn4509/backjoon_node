const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let h = Number(input[0].split(' ')[0]);
let m = Number(input[0].split(' ')[1]);
let plusM = Number(input[1]);
let plusH = 0;

if (m + plusM >= 60) {
  if ((m + plusM) % 60 === 0) {
    plusH = (m + plusM) / 60;
    m = 0;
  } else {
    plusH = Math.floor((m + plusM) / 60);
    m = (m + plusM) % 60;
  }
} else {
  m = m + plusM;
}
if (plusH !== 0) {
  if (h + plusH >= 24) {
    h = h + plusH - 24;
  } else {
    h = h + plusH;
  }
}

console.log(`${h} ${m}`);
