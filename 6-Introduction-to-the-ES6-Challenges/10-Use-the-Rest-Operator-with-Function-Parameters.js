// The rest operator allows for more higher order functions that take arguments stored in an array.

// Rest allows the function to access the array later in the function instead of checking it first.

// This allows for use of the map() filter() and reduce() functions in the parameter array.

// An indefinite number of arguments can be represented as an array by using the rest operator/ parameter https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

// After I wrote the code Python Tutor's JS module to see how it works step-by-step. http://pythontutor.com/javascript.html


const sum = (function() {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
