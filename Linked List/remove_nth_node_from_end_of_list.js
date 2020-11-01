/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// [1,2,3,4,5] n = 2
var removeNthFromEnd = function(head, n) {
  
  const dummyHead = new ListNode(null) 
  dummyHead.next = head

  let fast = dummyHead // make a new list
  let slow = dummyHead //make a new list

  for (let i = 1; i < n + 1; i++) { // i is 1 because we added a dummyHead 
    fast = fast.next // make fast jump ahead by n amount 
  }  

  while (fast.next !== null) { // while not at end of the list, increment
    fast = fast.next //2 3 4 5 
    console.log('fast is ' + fast.val) 
    slow = slow.next //0 1 2 3 // increments, but at 'n' behind the fast 
    console.log('slow is ' + slow.val)
  }
  
  slow.next = slow.next.next //now just delete the next node by removing the reference to it
  return dummyHead.next
};