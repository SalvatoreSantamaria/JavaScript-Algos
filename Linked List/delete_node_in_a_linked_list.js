// head Node
// tail Node : no reference to any other node

//node:
//data {string, etc} : reference to next node ->

// data | next -> data | next -> data | next

// a basic set up
const nodeOne = {
  data: 123
}
const nodeTwo = {
  data: 456
}
nodeOne.next = nodeTwo;


// change the value of the node to the value of the next node

// 4 -> 5 -> 1 -> 9 -> null
// 4.next = 5, 
// 5.next = 1,
//etc...

// deleting 5 (node = 5)
var deleteNode = function(node) {
  node.val = node.next.val //need to change the value of the next node. so change 5 to 1: 4 -> 1 -> 1 -> 9 -> null
  //node.next is pointing to the second 1 in 4 -> 1 -> 1 -> 9 -> null
  node.next = node.next.next //change the next reference of the node we are on to the next node after that.  4 -> 1 ->  9 -> null
}
