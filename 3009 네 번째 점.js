const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let xArr = [];
let yArr = [];
let x = {};
let y = {};
result = [];

for (let v of input) {
  let arr = v.split(' ');
  xArr.push(arr[0]);
  yArr.push(arr[1]);
}
xArr.forEach((v) => {
  x[v] = (x[v] || 0) + 1;
});
yArr.forEach((v) => {
  y[v] = (y[v] || 0) + 1;
});
for (let [key, val] of Object.entries(x)) {
  if (val === 1) {
    result.push(key);
  }
}
for (let [key, val] of Object.entries(y)) {
  if (val === 1) {
    result.push(key);
  }
}
console.log(result.join(' '));
