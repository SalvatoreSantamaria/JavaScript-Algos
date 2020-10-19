var moveZeroes = function(nums) {
  let index = 0; //index var as a marker to place non zero numbers
  
  for (let i = 0; i < nums.length; i++) {

    
    if (nums[i] !== 0) { //if the number is not a 0, place it towards start of array, which is nums
      nums[index] = nums[i];
      index++
    }
  }
  
  for (let i = index; i < nums.length; i++) { // change the remaining portion of the array with 0's, as an input of [0,1,0,3,12] would be [1,3,12,3,12]. see this by console.logging the nums array before this for loop
    console.log(i)
    nums[i] = 0;
  }
  
};

//time complexity: O(N) because it is in place

// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.