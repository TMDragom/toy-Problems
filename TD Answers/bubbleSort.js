//from https://zerotocode.today/toy-problems

/*sort an array of numbers in ascending order
i: {array}numArr: an unsorted array of numbers
o: {array}sortArr: an array of sorted numbers
c: assume that the original array can not be mutated no limits on time complexity, the anecdote suggest
  using bubble sort
e: many duplicates, or partially sorted? Largest num first or last, negatives,
  zeros? Non-integers? Non-numbers? Regardless, we're kinda on the path to bubbleSort already!
*/

//test cases
//simple:
const arr1 = [3, 6, 1, 7]; //largest number last
// after first round: [3, 1, 6, 7]
// after 2 [1, 3, 6, 7]

// additional:
const arr2 = [6, -5, 2, 3, -4, 4, 4, 5]; //largest num first partially sorted, negatives, dupes
const arr3 = [0, 0, 7, 7, -2.5, -2.5, 8, 111, -.75, 2, 3, 4]; //negatives, dupes, non-int

//worst answer, selection sort, not bubble
//sadly, I had to get help for worst answer! https://stackabuse.com/selection-sort-in-javascript/
bubbleSort1 = (numArr) => {
  //nested loops to find largest num and make it the last num

  for(let i = 0; i < numArr.length; i++) {
      // Finding the smallest number in the subarray
      let min = i;
      for(let j = i+1; j < numArr.length; j++){
          if(numArr[j] < numArr[min]) {
              min=j; //sets min to the index of smaller num, not the actual num
          }
       }
       if (min != i) {
           // Swapping the elements
           let temp = numArr[i];
           numArr[i] = numArr[min];
           numArr[min] = temp;
      }
  }
  return numArr;
}


// const a = ['a', 'b', 'c', 'e', 'd'];

// [a[3], a[4]] = [a[4], a[3]]


bubbleSort2 = (numArr) => {
  //iterate array checking pairwise and if val at i > j, swap
  //repeat as necessary
  let newArr = [...numArr];
  // console.log(newArr, 49);

  //make a swap function
  swap = (arr, i, j = i + 1) => {
    [arr[i], arr[j]] = [arr[j], arr[i]]; 
    return arr;
  }
  //make a helperSort
  //iterate array
  helperSort = (arr) => {
    for(let i = 0; i < arr.length; i++) {
      //if the first num is higher than the one to its right, swap
      if(arr[i] > arr[i + 1]) {
        swap(arr, i);
      }
    }
  return arr;
  }; //repeat for n - 1 times.

  //would normally use recursion, but trying something different
  for(let i = 0; i < newArr.length - 1; i++) {
    helperSort(newArr);
  }
  return newArr;
}

bubbleSort3 = (numArr) => {
  //modify bubbleSort 2 to count how many swaps were necessary,
  //if only 1, then done. Maybe :)
  let newArr = [...numArr];
  // console.log(newArr, 49);

  //make a swap function
  const swap = (arr, i, j = i + 1) => {
    [arr[i], arr[j]] = [arr[j], arr[i]]; 
    return arr;
  }
  //make a helperSort
  //iterate array
  let count;
  helperSort = (arr) => {
    count = 0;
    for(let i = 0; i < arr.length; i++) {
      //if the first num is higher than the one to its right, swap
      if(arr[i] > arr[i + 1]) {
        count += 1;
        swap(arr, i);
      }
    }
  return arr;
  }; //repeat for n - 1 times.

  //do while count > 1
  do {
    helperSort(newArr);
  } while (count > 0);
  return newArr;
}

// console.log(bubbleSort1(arr1));
console.log(bubbleSort2([9, 3, 11, 4, 1, 12]));
