// The conditional operator can be used to write one line if-else expressions. The conditional operator is ? and is also called the Ternary operator.

// condition ? statement-if-true : statement-if-false;

//function findGreater(a, b) {return a > b ? "a is greater" : "b is greater";}

// if a is greater than b return "a is greater" else return "b is greater"

function checkEqual(a, b) {
  return a == b ? true : false;
}

console.log(checkEqual(1, 2));
