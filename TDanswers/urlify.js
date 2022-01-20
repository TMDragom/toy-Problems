/*URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string
has sufficient space at the end to hold the additional characters, and that you are given the "true"
length of the string. (Note: If implementing in Java, please use a character array so that you can
perform this operation in place.)
EXAMPLE
Input: "Mr John Smith ", 13
Output: "Mr%20John%20Smith"
Hints: #53, # 118

i:  {String} str: a string
    {Number} len: the known (true) length of string (not capacity)
o:  {String} newStr: a string with 0+ insertions of '%20' to replace space
c:  if Java: character array (not using java), time/space concerns
    Okay to mutate original?
e:  no spaces, multiple spaces in a row

BRAINSTORM: JS has an advantage by str length dynamic .split() and .join() OR .splice() provide 
 quick options. BUT, every insertion is O(n) and unsure how methods execute
 Ideally, check MDN to confirm. But can assume the worst for now.
 No known issue related to regex val of insertion except that it is longer than a space
 Assuming adjacent spaces won't happen and trailing space can be ignored

worst: split at space and rejoin with '%20'
equally bad maybe: find indexOf ' ' and use splice to insert
better: split, then recurse to build a new string without multiple insertions
best: actually, might have had it right at worst, but also see urlify5
*/

//test arguments:
const str1 = "abra cad ab ra";
const num1 = str1.length;
const str2 = "am I doing this right"
const num2 = str2.length;

//not sure of time complexity of .join
//but converting to arrays might be dicey.
urlify1 = str => str.split(' ').join('%20');



function urlify2(str, num) {
  let newStr = str.split('');

  while(newStr.indexOf(' ') > 0) {
    newStr.splice(newStr.indexOf(' '), 1, '%20');
  }
  return newStr.join('');
}

//preserves original str
//returns newStr
//time complexity O(n); correction, forgot to account for deletions from slice
//space complexity - 2 arrays of length <=n: so?
function urlify3(str, num, newStr = '') {
  //base case
  if(!str.length) return newStr;

  let x;

  str[0] !== " " ? x = str[0] : x = '%20';
  newStr = newStr += x;

  return urlify3(str.slice(1), num, newStr);
}

//whoops this was prob a waste if every slice is O(n) bc of re-indexing
function urlify4(str, num) {
  //base case
  if(num === 0) return str;

  str[0] !== " " ? str += str[0] : str += '%20';

  return urlify4(str.slice(1), --num);
}

//FINAL ANSWER - the others were prob fine, but this is O(n)
//doesn't require re-indexing. Only obvious cost is double wide str
//and doesn't require a new data structure;
function urlify5(str, num) {
  for(let char of str) {
    char !== " " ? str += char : str += '%20';
  }
  return str.slice(num);
}

//print test results
// urlify1(str1, num1);
console.log(urlify1(str2, num2), 91);
console.log(str1);

/*
Time Complexity:
Space Complexity:
Advanced:
Notes: Not sure about the complexities
TO DO: look up time complexity of slicing strings, and of .slice/.join
//update: strings are immutable, so reindexing only applies when transfored via split 
*/