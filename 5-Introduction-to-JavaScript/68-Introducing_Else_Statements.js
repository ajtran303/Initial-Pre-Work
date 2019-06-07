// In a standard if statement, code is executed when the condition returns true. An else statement adds additional code that can be executed when the if statement condition is not initially met.

function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

// Change this value to test
testElse(5);
