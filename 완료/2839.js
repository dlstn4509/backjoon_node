const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString();
let cnt = 0;

const chk = (nn) => {
  if (nn % 5 === 0) {
    cnt += nn / 5;
  } else if (nn >= 3) {
    cnt += 1;
    chk(nn - 3);
  } else {
    cnt = -1;
  }
};

chk(input);
console.log(cnt);
