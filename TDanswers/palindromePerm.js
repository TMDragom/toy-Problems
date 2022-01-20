/* From CtCI 1.4 
Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation
is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
EXAMPLE
Input: Tact Coa
Output: True (permutations: "taco cat", "atco eta", etc.)

i:  {string}
o:  {bool}
c:  n/a- consider optimizations
e:  uppercase letters, spaces, odd and even lengths

BRAINSTORM:
  //convert to lowercase first
worst: iterate string and search each letter, removing as we go
better: sort both, check if index 0 and 1 match, slice and recurse til length is one or zero
best: hash- use simple js obj to cache letters. If more than one val is odd, then false
*/

//test arguments:
const str1 = "abracadabra"
const str2 = "wowow"
const str3 = "ar eacre"
const str4 = "A mare Room"

//first attempt
function palPerm(str){
  str = str.split(' ').join(''); //Big O?
  str = str.toLowerCase(); //O(n), but unavoidable?

  function cacheHelper(str) {
    let cache = {};
    for (let char of str) {
      (!cache[char]) ? cache[char] = 1 : cache[char] += 1;
    }
    return cache;
  }

  const cache = cacheHelper(str);

  const oddCache = {};

  // let chars = Object.keys(cache);
  for(let key in cache) {
    if (cache[key] % 2 !== 0) {
      oddCache[key] = cache[key];
    }
  }

  const oddCharsCount = Object.keys(oddCache).length;

  return oddCharsCount <=1 ? true : false;
};

//improved attempt: needs cleaning up & consol,
//but IFF str has a minority of capitalized letters, should be faster?
function palPerm2(str){

  function cacheHelper(str) {
    let cache = {};
    for (let char of str) {
      (!cache[char]) ? cache[char] = 1 : cache[char] += 1;
    }
    return cache;
  }

  const cache = cacheHelper(str);

  const oddCache = {};

  // let chars = Object.keys(cache);
  for(let key in cache) {
    if (cache[key] % 2 !== 0) {
      oddCache[key] = cache[key];
    }
  }

  let oddCharsCount = Object.keys(oddCache);

  if (oddCharsCount.length <= 1) return true;

  oddCharsCount = oddCharsCount.join('');
  oddCharsCount = oddCharsCount.toLowerCase();

  let finalCache = cacheHelper(oddCharsCount);

  for(let key in finalCache) {
    if (finalCache[key] % 2 === 0) {
      delete finalCache[key];
    }
  }

  let final = Object.keys(finalCache);

  if (final.length <= 1) return true;

  return false;
};




//print test results
console.log(palPerm(str1));
console.log(palPerm(str2));
console.log(palPerm(str3));
console.log(palPerm(str4));
console.log(palPerm2("abvc fe ghjoabe"));


/*
Time Complexity:
Space Complexity:
Advanced:
Notes:
*/