// A queue is a data structure where items are kept in order.
// In a queue, elements are removed from the beginning and appended to the end.

function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  return arr.shift(); // Change this line
}

// Test Setup
var testArr = [5,6,7,8,9];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 10)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
