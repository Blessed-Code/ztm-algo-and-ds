// return value of n index
// 0,1,1,2,3,5,8,13,21,34,55,89, 144, 233
// 0,1,2,3,4,5,6,7 ,8 ,9 ,10,11, 12 , 13 ,14
// misal n = 2 berarti returnya 1
function findFibonacciIterative(n) {
  // O(n)
  let fibValue = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibValue.push(fibValue[i - 1] + fibValue[i - 2]);
  }
  return fibValue[n];
}
// console.log(findFibonacciIterative(6));

function findFibonacciRecursive(n) {
  // O(2^n) sangat lambat. lebih parah dari O(n^2)
  if (n < 2) return n;
  return findFibonacciRecursive(n - 1) + findFibonacciRecursive(n - 2);
}

console.log(findFibonacciRecursive(20));
