function hourglassSum(arr) {

	let rows = arr.length //all of the arr
	let columns = arr[0].length //the number of columns is calculated via the length of the first line
	let max_sum = -63 // set this to -63 to handle negative arr value test cases

	// loops need to stop at (rows - 2) and (columns -2) because that's how we prevent the hourglass from 
	// going outside of the grid matrix

	// 1 1 1 0 0 0
	// 0 1 0 0 0 0
	// 1 1 1 0 0 0
	// 0 0 2 4 4 0
	// 0 0 0 2 0 0
	// 0 0 1 2 4 0
	//output should be 19

	for (let i = 0; i < rows-2; i++) {
			for (let j = 0; j < columns-2; j++) {
					let current_sum = 
						arr[i][j] + arr[i][j+1] + arr[i][j+2] + 
						arr[i+1][j+1] +
						arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
					max_sum = Math.max(max_sum, current_sum) //take whichever is bigger
			}
	}
	return max_sum
}