function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  let result = 0;
  let count;
  while(N > 0) {
    if (N%2 === 1) {
      result = (count && result < count) ? count: result;
      count = 0;
    } else {
      count++;
    }
    N = Math.floor(N/2);
  }
  return result;
}


