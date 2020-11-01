/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
  
  let totalSum = 0
  function dfs(node) {
    if (!node) {
      return
    }
    
    if (node.val >= L && node.val <= R) {
      totalSum += node.val // while in range, add onto totalSum
    }
    
    if (L < node.val) { //if left is less than node.val, recursively call dfs on the left
      dfs(node.left)
    }
    
    if (R > node.val) { //if  node.val is less that right, recursively call dfs on the right
      dfs(node.right)
    }
  }
  
  dfs(root) // have to call the function
  return totalSum //can return now because we have added up totalSum
  //time complexity is O(n)
  
  
  
  
  
  //other way of doing this
  
//     if (root === null) return 0 
  
//     // function to return sum to a range
//     const walk = (node, min, max) => {
//       if (node === null) return 0
    
//     let sumLeft = 0
//     let sumRight = 0
    
//     if (node.val > min) {
//       sumLeft = walk(node.left, min, max)
//     }
  
//     if (node.val < max) {
//       sumRight = walk(node.right, min, max)
//     }

//     let sum = sumLeft + sumRight
    
//     if (node.val >= min && node.val <= max) {
//       sum += node.val
//     }
  
//     return sum
//   }
//   return walk(root, L, R)
};


// Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).
// The binary search tree is guaranteed to have unique values.

// Example 1:

// Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
// Output: 32