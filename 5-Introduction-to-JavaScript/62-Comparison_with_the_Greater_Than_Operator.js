// The > greater than operator will check number values. If the number to the left of > is greater than the number on the right, it will return true.

// This operator will convert data types.

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

// Change this value to test
testGreaterThan(11);
