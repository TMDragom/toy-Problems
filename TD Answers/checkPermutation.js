

/*1.2 Check Permutation: Given two strings, write a method to decide if one is a permutation of the
other.
Hints: #7, #84, #722, #737

i:  {String}str1
    {String}str2
o:  Bool
c:  Work towards optimal space, time complexity
e:  Strings of different lengths, spaces, advanced: more than 2 strings

Brainstorm
Worst: check if equal length, then check every letter against every other letter with nested loops, slicing from second if matching. Long time: O(n^2)
Better: check length then maybe sort both and check recursively from index 0. Each sort is O(n*log n) and recursion is O(n)
Better: check length, then hash tables (here just 2 js objects), convert to objects and check equiv val at keys. Used for answer below. O(n)
Heap: I should probably brush up on what a heap is?
*/

///variables for test cases///
const s1 = 'abcfghl'
const s2 = 'lbcafhg'
const s3 = 'rmafhcb'
const s4 = 'fh bar cm'

function checkPermutation(str1, str2){
  // str1 = str1.split(' ').join(''); //uncomment if ignoring spaces
  //first check length bc no need to waste time otherwise.
  if(str1.length !== str2.length) {
    return false;
  }

  function cacheHelper(str) {
    let cache = {};
    for(let char of str) {
      (!cache[char]) ? cache[char] = 1 : cache[char] += 1;
    }
    return cache;
  }

  const cache1 = cacheHelper(str1);
  const cache2 = cacheHelper(str2);

  for(let key in cache1) {
    if ((!cache2[key]) || (cache1[key] !== cache2[key])) {
      return false;
    }
  }
  return true;
};



///run and console.log solution///
console.log(checkPermutation(s1, s2), 55); //T
console.log(checkPermutation(s1, s3), 56); //F
console.log(checkPermutation(s2, s3), 57); //F
console.log(checkPermutation(s2, s4), 58); //F
console.log(checkPermutation(s3, s4), 59); //F unless not counting strings: uncomment ln 28, then T
console.log(checkPermutation(s4, s1), 60); //F


/*
IF TIME
Time Complexity: O(n)?
  O(1) each for length check, init caches, and returns,
  O(n) to pop each cache (x2),
  O(2n) [worst case] to iterate cache1 with 2 logical checks each time
  >>> O(4n + 7ish) ~ O(n)

Space Complexity: need to review calc for space complexity, but not too bad I think? 2 original strings, and two objects with n props; can elim
  second object and iterate second string, decrementing val at associated key of cache1 returning false if ever <0;

Refactors:
  1. If considered spaces, how to refactor solution to ignore spaces. A: see ln 28
  2. What if instead of two strings, there are an unknown number
Other thoughts, considerations: A: define params as (...str); check length of all first; let str[0] set target cache
  then iterate through rest of args creating cache and checking against target cache

NOTE: accidentally using "in" to loop thru array, lead to a caching index values instead of letters. Whoops
      also: look up heaps
*/