function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let temp = [];
  for(let item of A) {
    temp[item - 1] = item;
  }
  let i;
  for(i = 0; i < temp.length; i++) {
    if(!temp[i]) {
      break;
    }
  }
  return i + 1;
}
