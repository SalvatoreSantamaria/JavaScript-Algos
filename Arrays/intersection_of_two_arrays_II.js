/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//nums1 = [1,2,2,1], nums2 = [2,2]
var intersect = function(nums1, nums2) {
  let obj = {}
  let result = []
  
  //make a hashmap of the first array of nums
  for (let i of nums1) {
    if (!obj[i]) {
      obj[i] = 1
    } else {
      obj[i]++
    }
  }
  
  //loop through the second array of nums add see if the hashmap has a count of the value
  for (let i of nums2) {
    if (obj[i] > 0) {
      result.push(i)
      obj[i]-- //decrement the value in the obj after it is found
    }
  }
  console.log(obj)
  return(result)
};

// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Note:

// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.
// Follow up:

// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?