// != the inequality operator works the opposite way of == the equality operator. It will perform data type conversion.

// 1 != 1 returns false, 1 != 2 returns true.

// 1 != "1" returns false

// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testNotEqual(100);
