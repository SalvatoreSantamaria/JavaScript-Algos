var removeDuplicates = function(arr) {
  //old way with while loop
  //nums = [1,1,2,2,8,8]  
  // let p1 = 0
  // let p2 = 0
  //   //this algo just changes numbers inside of the array in order until we run out of arr length, and then just returns the index value
  //   while (p2 < nums.length) {
  //     if (nums[p2] !== nums[p2 - 1]) { //if current value does not equal previous value
  //       nums[p1] = nums[p2] //set p1 to the value of current value of p2 (which is the number we want to keep)
  //       p1 +=1 
  //     }
  //     p2 += 1
  //    // console.log(' this is nums ' + nums + ' this is p1 ' + p1 + ' this is p2 ' + p2) 
  //   }
  //   return p1

  //better way with for loop
  let indexCounter = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != arr[i - 1]) { //if current value does not equal previous value 
      arr[indexCounter] = arr[i] //set arr of index counter to arr[i]
      indexCounter++ //increment the index
    }
  }
  console.log(arr) 
  // if you want to actually delete the repeats at the end, let result = arr.splice(0, index)
  return indexCounter


  };

// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Given nums = [1,1,2],

// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

// It doesn't matter what you leave beyond the returned length.
// Example 2:

// Given nums = [0,0,1,1,1,2,2,3,3,4],

// Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

// It doesn't matter what values are set beyond the returned length.