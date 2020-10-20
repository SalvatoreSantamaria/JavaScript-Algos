var twoSum = function(nums, target) {
  ///
  const obj = {} //create object
  
  for (let i = 0; i < nums.length; i++) {  //loop through all numbers
    
    const j = obj[target - nums[i]] //check to see if we have object index for the needed value
    if (j != null) { //if we have something for obj
      return [j, i]
      
    } else {
      //console.log(i) //this is the index of the for loop, ie 0 1 2 3....

      obj[nums[i]] = i //otherwise, store the index value: 0
      //console.log(obj[nums[i]]) // seting the obj key to the number, and the value the index: {'7':0}

      //console.log(obj)
    }
  }
};

//twoSum([7,11,15,2],9)

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]