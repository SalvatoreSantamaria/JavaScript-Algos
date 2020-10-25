add patterns?
.each
arrow functions

//arr = ["Banana", "Orange", "Lemon", "Apple", "Mango"] 
//slice: returns copy. arr.slice(1, 3) = "Orange", "Lemon" 

//splice: adds/removes and returns the removed items. arr.splice(2, 0, "a", "b") = ["Banana", "Orange", "a", "b", "Lemon", "Apple", "Mango"] 

//remove from an array
const array = [2, 5, 9];
const index = array.indexOf(5);
if (index > -1) {
  array.splice(index, 1);
} //will remove 5 

function removeItemAll(arr, value) {
  var i = 0;
  while (i < arr.length) {
    if (arr[i] === value) {
      arr.splice(i, 1);
    } else {
      ++i;
    }
  }
  return arr;
}

// array = [2, 9]
console.log(array); 

//substrings and chunking
function chunk(array, size) { 
  let result = []
  let i = 0
  while (i < array.length) {
    result.push(array.slice(i, i + size)) //slice does the magic of index through whatever number s
    i += size  // increment by size
  }
  console.log(result)
  return result;
}

// recursion console.log arr values
function recursive(arr, i = 0) {
  if (i >= arr.length) {   // recursive functions must have a guard, or stopping point!
    console.log("End of loop");
    return;
  }
  console.log("Recursive " + arr[i]); // log the place in the array
  recursive(arr, i + 1);
}

// recursion console.log through object // really hard to for loop through because you don't know how deep it goes
function treeRecursive(tree) {
  if (tree.children.length === 0) {   //if tree has no children in it, then return. this is the guard clause.
    return;
  }
  //forEach child of the tree
  tree.children.forEach((child) => {
    console.log("treeRecursive " + child.name); //print out name
    treeRecursive(child); //then pass in child to see if it has any children
  });
}

const negativeTest = x < 0 ? -1 : 1;

// while loop
let i = 0
while (i < 10) {
  console.log(i)
  i++;
}

// looping backwards from 'o' to 'h' in 'hello'
for (let i = digits.length-1; i >= 0; i--)

//convert string to Array
let arr = string.split()

// swap in place: arr = [1,2,3,4]
[arr[0], arr[1]] = [arr[1], arr[0]];
// arr is [2,1,3,4]
// with temp
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > arr[i + 1]) { //this will move all the lowest nums to the front of an arr
    var temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
} 

// sorting by length - smallest to largest
arr.sort((a, b) => a.length - b.length)

// make a hashmap
let obj = {}
for (let i of arr) {
  console.log(i) //a, b, c
  if (!obj[i]) {
    obj[i] = 1
  } else {
    obj[i]++
  }
}
//make a hashmap
let obj = {}
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])//a, b, c
  if (!obj[arr[i]]) {
    obj[arr[i]] = 1
  } else {
    obj[arr[i]]++
  }
}


