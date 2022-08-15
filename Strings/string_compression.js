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

//compress(["a","a","b","b","c","c","c"])


var compress2 = function(chars) {
	let count = 1
	let result = ''
	for (let i = 0; i < chars.length; i++) {
			if (chars[i] !== chars[i + 1]) {
					count++
			} else {
					result = result + chars[i] + count
					count = 1
			}
	}
	console.log(result)
}

compress2(["a","a","b","b","c","c","c"])