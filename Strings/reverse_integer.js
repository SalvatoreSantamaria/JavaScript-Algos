const reverse = x => {
  
  x = x.toString()
  const limit = 2147483648;
  const negativeTest = x < 0 ? -1 : 1;

  let result = ''
  for (let i of x) {  
    result = i + result   
  }
  result = parseInt(result) 

  return result > limit ? 0 : result * negativeTest;
};

// Note:
// Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321