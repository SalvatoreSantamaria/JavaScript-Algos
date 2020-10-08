// Given a numerical array, reverse the order of values, in-place without using .reverse()
function reverse(arr){
  //return arr.reverse()
    for (let i = 0; i < (arr.length- 1) / 2; i++) {
      let el = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = el;
    }
    return arr;
  }