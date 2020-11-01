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
// [1,2,3,4,5]
var middleNode = function(head) {
  let count = 0
  
  const dummyHead = new ListNode(null) 
  dummyHead.next = head
  let head1 = dummyHead //create a list
  let head2 = dummyHead //create a list

  while (head1.next !== null) { //make a count
    count++
    head1 = head1.next //moving through the list
  }
  
  console.log(count) 
  if (count % 2 == 0) { // because we need to return the 2nd in  the middle, have to add 1 for cases where there is two middles
    count++
  }
  
  i = 0
  while (i < count/2) { //walk through head2 and exit when we make it halfway
    console.log(head2)
    head2 = head2.next
    i++
  }
  return(head2) //now just return the rest of the list
};