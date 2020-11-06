var kidsWithCandies = function(candies, extraCandies) {
  // let max = candies.slice() 
  // max2 = max.sort() //this is the other way to get max in an array

  const max = Math.max(...candies)
  let result = []

  for (let i = 0; i < candies.length; i++) {
    result.push(candies[i] + extraCandies >= max)
      
  }

return(result)
};

// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true] 
// Explanation: 
// Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids. 