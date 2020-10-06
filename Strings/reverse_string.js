var reverseString = function(s) {
  let start = 0
  let end = s.length - 1 //3
  
  while (start < end) {
    let temp = s[start] //make temp = h
    s[start] = s[end] //make the first letter = to the last letter o
    s[end] = temp //make the last letter = to h
    start++
    end--
  }
};

// Write a function that reverses a string. The input string is given as an array of characters char[].

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

 

// Example 1:

// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]