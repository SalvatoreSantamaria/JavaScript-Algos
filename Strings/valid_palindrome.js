var isPalindrome = function(str) {
  let arr = str.split('')
  let result = []
  let reverse = []
  let alphabet = '0123456789abcdefghijklmnopqrstuvwxyz'
  let number = '0123456789'
  for (let i of arr) {
    if (alphabet.includes(i.toLowerCase())) {
      result.push(i.toLowerCase())
      reverse.push(i.toLowerCase())
    }
  }
  return(result.join('') == reverse.reverse().join(''))
};

// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false