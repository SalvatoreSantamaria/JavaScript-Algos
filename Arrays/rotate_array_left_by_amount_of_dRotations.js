// Rotate an array left the amount of dRotations
// arr = [1, 2, 3, 4, 5]
// dRotations = 4 
// returns 5 1 2 3 4
function rotLeft(arr, dRotations) {
  const rightSide = arr.splice(0, dRotations)
  console.log(arr, rightSide)
  return arr.concat(rightSide);
}