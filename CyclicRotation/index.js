//solution #1
function solution1(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  while(K > 0 && A.length > 0) {
    A = [A.pop(),...A]
    K--;
  }
  return A;
}

//solution #2
function solution2(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  if(K > A.length) K = Math.floor(K % A.length);
  let temp = A.splice(A.length - K, A.length);
  return [...temp,...A];
}
