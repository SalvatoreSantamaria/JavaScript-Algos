var strStr = function(haystack, needle) {
  if(!needle) {
    return 0;
  }

  let i = 0;
  //while the substring does not equal the needle and i is less than the length - ie inthe haystack
  while(haystack.substring(i, needle.length + i) !== needle && i <= haystack.length) {
    i++;
    // console.log(i, needle.length + i, haystack.substring(i, needle.length + i))
  }
  return i > haystack.length? -1 : i //if i runs all the way through the loop, it will be greater than the length
};

// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

 

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Example 3:

// Input: haystack = "", needle = ""
// Output: 0