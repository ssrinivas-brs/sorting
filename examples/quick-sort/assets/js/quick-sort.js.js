

// Helper function
function swap(array, firstIndex, secondIndex) {
  let temp = array[firstIndex]
  array[firstIndex] = array[secondIndex]
  array[secondIndex] = temp
}

// Helper function - returns the swap index
function pivot(array, pivotIndex=0, endIndex=array.length-1) { 
  let swapIndex = pivotIndex
  for (let i = pivotIndex + 1; i <= endIndex; i++) {
      if (array[i] < array[pivotIndex]) {
          swapIndex++
          swap(array, swapIndex, i)
      }
  }
  swap(array, pivotIndex, swapIndex)
  console.log(swapIndex);
  return swapIndex
}

// Quick Sort Algorithm
function quickSort(array, left=0, right=array.length-1) {
  if(left < right) {
      let pivotIndex = pivot(array, left, right)
      quickSort(array, left, pivotIndex-1)
      quickSort(array, pivotIndex+1, right)
  }
  return array
} 

         
// Implementation
const sortedArr = quickSort([4,6,1,7,3,2,5])
console.log('Quick sort for the given array is');
console.log(sortedArr);

// const myArr = [4,6,1,7,3,2,5]
// pivot(myArr)

// BIG O Notation
// Time complexity - O(n log n)
// Space complexity - O(log n)