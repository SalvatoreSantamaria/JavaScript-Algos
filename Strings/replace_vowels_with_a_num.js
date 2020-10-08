// Create a function that takes a string and replaces the vowels with another character.
// a = 1
// e = 2
// i = 3
// o = 4
// u = 5
// replaceVowel("karachi") ➞ "k1r1ch3"

function replaceVowel(word){
	const vowels = {'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5};
  	return [...word].map(i => i in vowels ? vowels[i] : i).join('');
}