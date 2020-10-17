var longestCommonPrefix = function(strs) {
  if (strs.length == 0) {
    return "";
  }

  prefix = strs[0]; // set prefix to first word

  //checking agaist each input word
  for (let i = 1; i < strs.length; i++) //loop through all of the words
      while (strs[i].indexOf(prefix) != 0) { //while we cannot find the prefix at the beginning of a word
          console.log('strs[i] is '+ strs[i])
          prefix = prefix.substring(0, prefix.length - 1); // decrease size of word by 1
          console.log('Prefix is currently ' + prefix)
          if (prefix === "") {
            return "";
          }
      }        
  return prefix;
}

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.