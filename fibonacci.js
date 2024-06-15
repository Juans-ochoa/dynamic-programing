/**
 * Brute force
 */

function fib(n) {
  if (n <= 2) return 1;

  return fib(n - 1) + fib(n - 2);
}

// console.log(fib(6)); // 8
// console.log(fib(8)); // 21
console.log(fib(50)); // 12586269025

/**
 * Memoization
 * js object, keys will be arg to fn, value will the be return value
 */

function fibMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}

console.log(fibMemo(50)); // 12586269025
