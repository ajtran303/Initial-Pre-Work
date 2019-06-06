// If a function does not have a return statement, the function will still process the code but will return undefined.

// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line

function addFive() {
  sum += 5
}

// Only change code above this line
var returnedValue = addFive();
