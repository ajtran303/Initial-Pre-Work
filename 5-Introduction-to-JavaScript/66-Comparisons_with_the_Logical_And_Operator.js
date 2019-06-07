// The logical and operator && will compare more than one operand at a time. It is useful for consolidating nested if statements.

// if (num > 5 && num < 10) {
//   return "Yes";
// }
// return "No";

// instead of

// if (num > 5) {
//   if (num < 10) {
//     return "Yes";
//   }
// }
// return "No";

function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
       return "Yes";
  }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(33);
