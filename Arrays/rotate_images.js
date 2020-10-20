// THIS IS A MEDIUM LEVEL PROBLEM 



var rotate = function(matrix) {
  
  let N = matrix.length;
  
  // 1 2 3
  // 4 5 6
  // 7 8 9
  
  for (let i = 0; i < N; i++) { //loop through row (i is the row 1 2 3 )
    for (let j=i; j<N; j++) { //loop through column. set j to i because want to move the column along with row 
      let temp = matrix[i][j] //swap
      matrix[i][j] = matrix[j][i] // 
      matrix[j][i] = temp;
    }
  }
  
  //this above makes the array look like
  // 1 4 7
  // 2 5 8
  // 3 6 9
  // console.log(matrix)
  
 // this reverses that with the two pointer swap
  
  for (let i = 0; i < N; i++) {
    for (let j = 0; j <(N/2); j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[i][N-1-j];
      matrix[i][N-1-j] = temp;
    }
  }
  // resulting with 
  // 7 4 1
  // 8 5 2
  // 9 6 3
  
};

// 1 2 3
// 4 5 6
// 7 8 9

// i = 0, j = 0;
// temp = matrix[0][0] //element is 1
// matrix[0][0] = matrix[0][0] //on the first pass this does nothing
// matxrix[0][0] = temp //

// i = 0, j = 1;
// temp = matrix[0][1] //elemnt at this position is the 2
// matrix[0][1] = matrix[0][0] //matrix[1][0] = 4 so 2 and 4 swap
// matxrix[1][0] = temp //matrix[1][0] = 4 so 2 and 4 swap



//PROBLEM TEXT
// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

 

// Example 1:


// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]