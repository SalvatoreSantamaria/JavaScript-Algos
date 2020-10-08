function compress(str) {
	let result = '';
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		count++;
		// if i isn't the same as i + 1, add the letter and the count to the result str, and reset the counter
		if (str[i] != str[i + 1]) {
			result += str[i] + count; 
			count = 0;
		} 
	}
  console.log(result)
}