function solution(X, Y, D) {
  // write your code in JavaScript (Node.js 8.9.4)
  let result = Y - X;
  return (result % D) === 0 ? result/D :  Math.floor(result/D) + 1;
}
