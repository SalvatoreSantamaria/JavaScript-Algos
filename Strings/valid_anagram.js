var isAnagram = function(s, t) {
  return (sorter(s) == sorter(t))
};

function sorter(str) {
  return str.split('').sort().join('')
}

// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true