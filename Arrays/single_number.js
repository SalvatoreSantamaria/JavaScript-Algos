var singleNumber = function(nums) {
  let obj = {}
  
  for (let i of nums) {
    if (!obj[i]) {
      obj[i] = 1
    } else {
      obj[i]++
    }
  }

console.log(obj)
for (let i in obj) {
  if (obj[i] = 1) {
    return i
  }
}
};

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

 

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1