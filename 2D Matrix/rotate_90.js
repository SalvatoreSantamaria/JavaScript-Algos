// 1 2 3
// 4 5 6
// 9 8 9  
// The left-to-right diagonal = 1+5+9 =15. The right to left diagonal =3+5+9=17 . Their absolute difference is 15 - 17 = 2

function diagonalDifference(arr) {

	let diag1 = 0
	let diag2 = 0
	let rows = arr.length;
	let columns = arr[0].length;

	let i = 0
	let j = 0
	let k = 0
	let l = arr.length - 1

	while (i < rows && j < columns && k < rows && l >= 0) {
			diag1 += arr[i][j]
			diag2 += arr[k][l]
			i += 1
			j += 1
			k += 1
			l -= 1
	}


	let dif = diag1 - diag2;

	if (dif < 0) {
			return(dif * -1)
	} else {
			return dif
	}
}