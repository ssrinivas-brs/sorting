

/**
 * For the given array, returns the sorted array using bubble sort
 * @param array
 * @return Array
 */

// Bubble Sort Algorithm
function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) { //outer loop decrements "i" value from array.length to 1
    noSwaps = true; //to check if any swaps were made during the pass. No swaps means already sorted
    for (let j = 0; j < i - 1; j++) { // inner loop to iterate from "0" to "i-1" - unsorted part
      if (arr[j] > arr[j + 1]) { 
        let temp = arr[j]; 
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

// Implementation
console.log('Bubble sort for the given array is ');
const sortedNums = bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
console.log(sortedNums);


// BIG O Notation
// Time complexity - O(n^2)
// Space complexity - O(1)

