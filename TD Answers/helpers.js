// things I use a lot in my answers //
// not to be used as a crutch bc I can't bring these on an interview //


//// EXPRESSIONS ////
//remove spaces in a string//
string = string.split(' ').join('')


//// FUNCTIONS ////

//SWAP two elements in an array
const swap = (array, i, j = i + 1) => {
  let arr = [...array];
  [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr; //does not mutate input array
}

//CACHE the characters in a string as a tally of each
//can also be used to cache elements in an array
//when used as a helper inside a function, save invocation via const
function cacheHelper(str) {
  let cache = {};
  for(let char of str) {
    (!cache[char]) ? cache[char] = 1 : cache[char] += 1;
  }
  return cache;
}

