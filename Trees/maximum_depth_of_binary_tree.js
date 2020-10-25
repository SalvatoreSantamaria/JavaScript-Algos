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
 * @return {number}
 */
var maxDepth = function(root) {
  if( root === null ) return 0;
  var result = 0;
  function dfs( node, depth ){ // make function to execute
      if( node.left !== null ){ //if left node is not null
          dfs( node.left, depth + 1 ); // run recursion on left node, increase the count of depth
      }
      if( node.right !== null ){// run recursion on right node, increase the count of depth
          dfs( node.right, depth + 1 );
      }
      else result = Math.max( result, depth ); //otherwise take the max of result or depth
  }
  dfs( root, 1 ); //input the root of the node and the initial depth
  return result;
};

// Given a binary tree, find its maximum depth.
// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
// Note: A leaf is a node with no children.
// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7