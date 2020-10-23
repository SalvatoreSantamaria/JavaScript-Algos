/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// keep track of previousNode, nextNode, and headNode. 
// instead of node.nextNode references the next node, make it reference the previousNode
// null (HAVE TO ADD THIS prev) -> 1 (head) -> 2 (next) -> null (next, which is also the tail)

var reverseList = function(head) {
  let previousNode = null // create a new node to the left of head
  
  while (head !== null) { // loop through
    let nextNode = head.next; 
    head.next = previousNode; // make the next node point to previous node 
    previousNode = head; //  set the prevous node to the beginning
    head = nextNode; //
  }

return previousNode //return the linkedlist. because head is null, we have to return previousNode
};