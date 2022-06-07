const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let arr = [];

for (let i = 1; arr.length < Number(input[0]); i = i + 2) {
  arr.push([Number(input[i]), Number(input[i + 1])]);
}

for (let i = 0; i < arr.length; i++) {
  let floor = arr[i][0];
  let ho = arr[i][1];
  let cnt = 1;
  let resultAtt = [];
  for (let j = 1; j <= ho; j++) {
    resultAtt.push(j);
  }
  while (true) {
    if (cnt === floor) {
      let result = 0;
      for (let j = 0; j < resultAtt.length; j++) {
        result += resultAtt[j];
      }
      console.log(result);
      break;
    }
    for (let j = 1; j < resultAtt.length; j++) {
      resultAtt[j] = resultAtt[j - 1] + resultAtt[j];
    }
    cnt += 1;
  }
}
