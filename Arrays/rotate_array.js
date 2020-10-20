var rotate = function(nums, k) {
  
  const n = nums.length
  
  k = k % n; //take the remainder the array
  console.log('this is k ' + k)
  
  reverse(nums, 0, n - 1) //reverse the whole array from 0 to end of the array
  reverse(nums, 0, k - 1) //reverse from 0 to the k, which is the first 3
  reverse(nums, k, n - 1) //reverse from the k to the  end of the array
  console.log(nums)

  //console.log(nums)

}

function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]]; //es6 swapping array notation, just like using temp vars
    start++
    end--
  }
}

rotate([1,2,3,4,5,6,7], 3)

// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Follow up:

// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
// Could you do it in-place with O(1) extra space?
 

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]