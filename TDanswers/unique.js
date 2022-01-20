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