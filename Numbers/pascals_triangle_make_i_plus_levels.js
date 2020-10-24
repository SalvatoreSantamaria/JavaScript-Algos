// input 5

//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]

var generate = function(numRows) {

  let triangle = []
  
  if (numRows == 0) { //no rows
    return triangle
  }
  
  triangle.push([1]) //manually create first row
  
  for (let i = 1; i < numRows; i++) { //start at 1 because we already have 0
    let prevRow = triangle[i - 1] //reference to prev row
    let newRow = [] //create new row
    newRow.push(1); // manually add the number 1 at the beginning of each row
    
    for (let j = 1; j < prevRow.length; j++) { //populate the interior of each row
      newRow.push(prevRow[(j - 1)] + prevRow[j]) //sum of two elements above the newRow
    }
    newRow.push(1) //manually add the number 1 at the end of each row
    triangle.push(newRow) // add the new row into the triangle
  }
  return triangle
};

// In Pascal's triangle, each number is the sum of the two numbers directly above it.
// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

