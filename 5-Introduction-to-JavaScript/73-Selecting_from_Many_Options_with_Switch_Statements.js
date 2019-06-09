// Similarly to if else statements, a switch statement executes logic for when there are multiple options to choose from.

// A switch statement will test a value against the possible values (cases) by using the strict equality operator ===.

// When the tested value matches a case, code will be executed in that case statement block, ending with a break.

// This example tests values passed as arguments in the function caseInSwitch and will return a string literal when the value is strictly equal to a value defined in the case statement.

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
      return "alpha";
      break;
    case 2:
      return "beta";
      break;
    case 3:
      return "gamma";
      break;
    case 4:
      return "delta";
  // Only change code above this line
  return answer;
  }
}

// Change this value to test
console.log(caseInSwitch(4));
