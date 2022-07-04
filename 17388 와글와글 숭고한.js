const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

let [Soongsil, Korea, Hanyang] = input.map((v) => Number(v));
let sum = Soongsil + Korea + Hanyang;
let obj = { Soongsil: Soongsil, Korea: Korea, Hanyang: Hanyang };

if (sum >= 100) {
  console.log('OK');
} else {
  // console.log(Object.entries(obj).sort((a, b) => a[1] - a[1]));
  console.log(Object.entries(obj).sort((a, b) => a[1] - b[1])[0][0]);
}
