// A switch statement can be used to evaluate multiple case statements that have the same output by omitting the break statement.

// Case statements are executed until a break in encountered.

function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
    case 2:
    case 3:
      return "Low";
      break;
    case 4:
    case 5:
    case 6:
      return "Mid";
      break;
    case 7:
    case 8:
    case 9:
      return "High";
      break;
    default:
      return "Choose a number between 1 and 9."
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
console.log(sequentialSizes(11));
