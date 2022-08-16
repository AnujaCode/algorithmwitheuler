// Write a function, reverseArray, that accepts an array as an argument and returns a reversed copy of that array.
// Use recursion. Don’t mutate the original array.

// let arr = [1,2,3,4];
// let reversedArr = reverseArray(arr);

// console.log(reverseArr) // [4,3,2,1]
// console.log(arr) // [1,2,3,4]

let arr = [1,2,3,4];
var newArray = [];


function reverseArray(arr) {
    var count = arr.length;
  
  if (newArray.length < arr.length) {
    newArray.push(arr[--count]);
    return reverseArray();
  }
  return newArray;
}

console.log (reverseArray(arr));
console.log(arr);

    