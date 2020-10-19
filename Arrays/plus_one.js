var plusOne = function(digits) {
  for (let i = digits.length-1; i >= 0; i--) { //iterate backwards through the number, going from last digit to 

    console.log('this is digitsi ' + digits[i] + ' digits ' + digits)
    digits[i]++
    
    //check if less than 10
    if(digits[i] < 10) {
      return digits; //exits here because incr successfully, and incr is completed
    } else { //otherwise sets the number to 0 and continues
      digits[i] = 0
    }
  }
  console.log('1 ' + digits)
  digits.unshift(1); //add a 1 in front of any double zeros ONLY IN THE CASE OF 99 or 999, etc
  console.log('2 ' + digits)
  return digits
}

// Given a non-empty array of digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

 

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Example 3:

// Input: digits = [0]
// Output: [1]