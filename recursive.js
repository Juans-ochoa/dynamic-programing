//Factorial
const factorial = (number) => {
  if (number === 0 || number === 1) return 1;
  return number * factorial(number - 1);
};

const isPalindrome = (string = "") => {
  if (string.length <= 1) return true;
  if (string.slice(0, 1) !== string.slice(-1)) {
    return false;
  }

  return isPalindrome(string.slice(1, -1));
};

const power = (x = 0, n = 0) => {
  if (n === 0) return 1;

  if (n < 0) {
    return 1 / power(x, -n);
  }

  if (n > 0 && n % 2 === 0) {
    const y = power(x, n / 2);
    return y * y;
  } else {
    return power(x, n - 1) * x;
  }
};

console.log(power(2, -2));

const factorialMemo = (number, memo = {}) => {
  if (number === 0 || number === 1) {
    return 1;
  }

  if (number in memo) {
    return memo[number];
  } else {
    const result = number * factorialMemo(number - 1, memo);
    memo[number] = result;
    return result;
  }
};

console.log(factorialMemo(10));
