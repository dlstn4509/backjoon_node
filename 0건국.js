let C = 100;
let A = [
  [9, 13, 5],
  [1, 11, 7],
  [3, 7, 4],
];
let Temp = 0;

for (let i = 0; i < A.length; i++) {
  for (let j = 0; j < A.length; j++) {
    Temp = A[i][j] + C;
    A[i][j] = A[j][i];
    A[j][i] = Temp - C;
  }
}

for (let i = 0; i < A.length; i++) {
  for (let j = 0; j < A.length; j++) {
    console.log(A[i][j]);
  }
}
