// The return statement will stop the current function and retun a value to where the function is called.

// If a or b is less than 0, the function abTest will return the value undefined and exit.

// Setup
function abTest(a, b) {
  // Only change code below this line
  if (a < 0 || b < 0) {
    return undefined;
  }
  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
console.log(abTest(-2,2));
