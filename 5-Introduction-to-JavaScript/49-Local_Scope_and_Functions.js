// Variables declared in a function have local scope. Function parameters are also local. That means they cannot be referenced ouside of the function they are declared in.

function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar;
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
// Now remove the console log line to pass the test
