// Using the assignment operator will resolve everything to the right of the equals sign before the value is assigned to the variable.

// In the example below, the function processArg is resolved before it is assigned to the variable processed.

// Example
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

processed = processArg(7);
