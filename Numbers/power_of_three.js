var isPowerOfThree = function(n) {
  if (n < 1) { //does not work with negatives
    return false
  }
  
  while (n % 3 == 0) { //while n is divisable by 0
    n = n / 3 //set n to be n / 3
    console.log(n)
  }
  console.log(n)
  return(n == 1) //because 3/3 is 1
};

isPowerOfThree(9)