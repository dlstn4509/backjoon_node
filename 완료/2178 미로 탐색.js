const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let [x, y] = input[0].split(' ').map((v) => Number(v));
let arr = [];
let result = 0;

for (let i = 1; i <= x; i++) {
  arr.push(input[i].split(''));
}
// console.log(arr);
let latlon = [0, 0];

// console.log([arr[latlon[0] + 1][latlon[1]]]);
// console.log([arr[latlon[0] + 1][latlon[1]]] == '1');

// if ([arr[latlon[0] + 1][latlon[1]]] == '1') {
//   result += 1;
//   latlon[1] += 1;
// } else if ([arr[latlon[0]][latlon[1] + 1]] == '1') {
//   result += 1;
//   latlon[0] += 1;
// }

while (true) {
  if (arr[latlon[0] + 1] && [arr[latlon[0] + 1][latlon[1]]] == '1') {
    result += 1;
    latlon[0] += 1;
  } else if (arr[latlon[1] + 1] && [arr[latlon[0]][latlon[1]] + 1] == '1') {
    result += 1;
    latlon[1] += 1;
  }
  if (latlon[0] === x - 1 && latlon[1] == y - 1) {
    break;
  }
  console.log(latlon);
}

console.log(result);
