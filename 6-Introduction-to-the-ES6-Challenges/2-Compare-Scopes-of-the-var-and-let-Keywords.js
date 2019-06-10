// var declares a variable globally outside of a function and locally inside of a function.

// let allows variables to be declared with respect to their scope. So they will be defined and limited to the block, statement, or expression it was used in. If it is defined in the global space, it will be global.

// The best practice is to use different names for different let declarations. The code below is pasted from the freeCodeCamp exercise and does not follow this practice.

function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
checkScope();
