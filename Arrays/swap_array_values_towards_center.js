// Create a function that takes an array and swaps all the numbers towards the center.
function swapTowardCenter(arr) {

	for (var i = 0; i < arr.length/2; i++) {
	var temp = arr[i];
	arr[i] = arr[arr.length - 1 - i]
	arr[arr.length - 1 - i] = temp;
	}
	return arr
}