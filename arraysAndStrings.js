/* eslint-disable */

/*
1.1 Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
cannot use additional data structures?
Hints: #44, #7 7 7, #732
1/17/22 8:09 AM
i: {string}
o: {bool}
c: cannot use additional data structures
e: spaces/symbols

Worst- iterate string, checking each char against rest of string and returning false if equal- ave time: O(n^2)
Maybe better - sort and check simultaneously, exiting as soon as dupe found- still O(n^2)
Better- sort string using quicksort or similar, then recursively check if index 0 and 1 are equal- ave time: O(n log n) x O(n) 
Ideal - create a hash (just a JS object here) to cache chars and if any val > 0, return false: ave time: O(n); 
  BUT "What if" does not allow additional data structures; so must also solve other way
*/


const string1 = "Oh my goodness, me"
const string2 = "12jfioej5 45i4op8 340-u34"
const string3 = "xxxuxyyxxx"
const string4 = "abcdefghijklmnopqrstuvwxyz1234567890"
const string5 = "abcd efghi jklmnopqrst uvwxyz12 34567890"


//// WORST O(n^2)////
const unique = (string) => {
  //string = string.split(' ').join(''); uncomment if not checking spaces
  //console.log(string);
  for(let i = 0; i < string.length - 1; i++) {
    for(let j = i + 1; j < string.length; j++) {
      if(string[j] === string[i]) {
        return false;
      }
    }
  }
  return true;
}

//// MAYBE BETTER? but still O(n^2)////
const unique3 = string => {
  //use a bubbleSort method but check for dupes as we go
  string = [...string];
  //convert string to array
  //string = string.split(' ').join(''); //uncomment if not checking spaces
  // string = string.split(); //sort condition unimportant as long as like values next to like
  //make a swap helper function
  const swap = (arr, i, j = i + 1) => {
    [arr[i], arr[j]] = [arr[j], arr[i]]; 
    return arr;
  }

  //set a count, for each sort iteration, if count <= 1, return true;
  let count;
  let result = true;
  const sortRecurse = (arr) => {
    count = 0;
    for(let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1]) {
        result = false;
      }
      if (arr[i] > arr[i + 1]) {
        count += 1;
        swap(arr, i);
      }
    }
    return arr;
  }
  do {
    sortRecurse(string);
  } while (count > 0);
  return result;
}


//// BETTER (n*log n)^2 or is it n^2 * log n ////
const unique2 = string => {
  //when recursing, new input will be an array, so only split if typeof === string
  if(typeof string === 'string') {
  //string = string.split(' ').join(''); //uncomment if not checking spaces
  string = string.split('').sort(); //sort condition unimportant as long as like values next to like
  // console.log(string);
  }

  //base case- if string depleted, return true;
  if(!string.length) return true;

  //check first 2 elements
  if(string[0] === string[1]) {
    return false;
  }
  //recurse
  return unique(string.slice(1));

}

//// BEST O(N) ////

const unique4 = string => {
  // string = string.split(' ').join(''); //uncomment if not checking spaces
  let cache = {};
  for(letter of string) {
    if (cache[letter]) {
      return false;
    } else {
      cache[letter] = 1;
    }
  }
  return true;
}
console.log(unique4(string1), 102);
console.log(unique4(string2), 103);
console.log(unique4(string3), 104);
console.log(unique4(string4), 105);
console.log(unique4(string5), 117);




/*
1.1 Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
cannot use additional data structures?
Hints: #44, #7 7 7, #732

1.2 Check Permutation: Given two strings, write a method to decide if one is a permutation of the
other.
Hints: #7, #84, #722, #737

1.3 URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string
has sufficient space at the end to hold the additional characters, and that you are given the "true"
length of the string. (Note: If implementing in Java, please use a character array so that you can
perform this operation in place.)
EXAMPLE
Input: "Mr John Smith ", 13
Output: "Mr%20John%20Smith"
Hints: #53, # 118

1.4 Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation
is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
EXAMPLE
Input: Tact Coa
Output: True (permutations: "taco cat", "atco eta", etc.)
Hints: #106, #121, #134, #136

1.5 One Away: There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings, write a function to check if they are
one edit (or zero edits) away.
EXAMPLE
pale, ple -> true
pales, pale -> true
pale, bale -> true
pale, bake -> false

1.6 String Compression: Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
"compressed" string would not become smaller than the original string, your method should return
the original string. You can assume the string has only uppercase and lowercase letters (a - z).
Hints:#92, #110

1.7 Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4
bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
Hints: #51, # 100

1.8 Zero Matrix: Write an algorithm such that if an element in an M

1.9 String Rotation:Assumeyou have a method isSubstringwhich checks if oneword is a substring
of another. Given two strings, sl and s2, write code to check if s2 is a rotation of sl using only one
call to isSubstring (e.g., "waterbottle" is a rotation of"erbottlewat").
Hints: #34, #88, # 7 04 

*/