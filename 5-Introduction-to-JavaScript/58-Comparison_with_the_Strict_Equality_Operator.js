// The strict equality operator === will only consider values that are of the same data type.

// The equality operator will perform type conversion and then compare the values. (type coercion).

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);
