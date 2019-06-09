// It may not be practical to define all possible values (case statements) in a switch statement.

// Add a default statement as the last case statement like the final else statement in if else  logic.

// This example tests values passed as arguments in the function switchOfStuff and will return a string literal when the value matches a case statement in the switch statement.

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
case "a":
  return "apple";
  break;
case "b":
  return "bird";
  break;
case "c":
  return "cat";
  break;
default:
  return "stuff"
  break;
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
console.log(switchOfStuff("d"));
