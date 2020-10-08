// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.
function factorial(n){
  if (n < 0 || n > 12) {
    throw new RangeError("The argument must be between 0 and 12.")
  } else {
    let result = 1
    for (let i = 1; i <= n; i++) {
      result = result * i
    }
    return result
  }
}