//solution #1
function solution1(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if(A.length <= 1) return A[0];
  let test = A.shift();
  for(let i = 0; i < A.length; i++) {
    if(A[i] === test) {
      A.splice(i, 1);
      test = null;
      break;
    }
  }
  return (!test) ? solution(A): test;
}

//solution #2
function solution2(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let result = {};
  for(let item of A) {
    if(!result[item]) {
      result[item] = true;
    } else {
      delete result[item]
    }
  }
  return parseInt(Object.keys(result)[0]);
}
