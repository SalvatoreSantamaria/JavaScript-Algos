let rob = function(nums) {
  let previous = 0;
  let current = 0;
  let temp; 
  for (let i of nums) {
      temp = current; 
      console.log('this is i ' + i + '. this is previous ' + previous)
//console.log('this is i ' + i + '. this is previous ' + previous)
      console.log('i+prev ' + (i + previous) + '. current ' + current)
      current = Math.max(i+previous, current);
      previous = temp;
  }
  return current;
}

// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
//              Total amount you can rob = 1 + 3 = 4.