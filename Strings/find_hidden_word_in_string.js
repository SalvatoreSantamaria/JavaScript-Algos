// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
// detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"
function detectWord(str) {
	let wanted = ""
	for(let letter of str){
		if (letter === letter.toLowerCase()){
			wanted = wanted + letter
		}
	}
	return wanted
}