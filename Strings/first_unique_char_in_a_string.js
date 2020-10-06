var firstUniqChar = function(s) {
  let obj = {};
  
  for (let i of s) {
    if (!obj[i]) {
      obj[i] = 1
    } else if (obj[i]) {
      obj[i]++
    }
  }
  
  // { 
  // l: 1, 
  // e: 3, 
  // t: 1, 
  // c: 1, 
  // o: 1, 
  // d: 1 
  // }

  
  for (let j in obj) {
    if (obj[j] == 1) {
      return (s.indexOf(j))
    }
  }
  return -1
  
};

// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.