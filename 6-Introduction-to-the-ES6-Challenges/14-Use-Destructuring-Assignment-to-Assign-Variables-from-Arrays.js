// Destructuring arrays is just as easy as Destructuring objects.

// Variables can be assigned to any value in the array and commas are used to index the array.

// The code below uses an anonymous arrow function to reassign variables from a destructured array.

let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [b, a] = [a, b];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
