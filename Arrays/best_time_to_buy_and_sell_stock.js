/**
 * @param {number[]} prices
 * @return {number}
 */

//[7,1,5,3,6,4]
// number walk through
// 7
// 1 //sets buy to 1
// 5 //is 5 less than 1? no. so 5 - 1 > profit? yes. so profit is set to 5 -1, which is 4
var maxProfit = function(prices) {

  let buy = prices[0] //set to first in array
  let profit = 0 // to keep track of the profit
  
  for (let i = 0; i < prices.length; i++) { //iterate through each 
    
    if (prices[i] < buy) { 
      buy = prices[i]; //set buy point to lowest
      //console.log(buy)

    } //otherwise
    
    

      else if ((prices[i] - buy) > profit) { // else find the different between the current lowest and the current index and see if they are greater than profit
        profit = prices[i] -buy
        console.log(profit)
      }
      
    }
    return profit;
  }