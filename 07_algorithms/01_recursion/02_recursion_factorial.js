function findFactorialRecursive(number) {
  // O(n)
  if (number === 1) {
    return 1;
  }
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  // O(n)
  let answer = number;
  for (let i = number; i > 1; i--) {
    answer = answer * (i - 1);
  }
  return answer;
}

console.log(findFactorialRecursive(2));
console.log(findFactorialIterative(2));
