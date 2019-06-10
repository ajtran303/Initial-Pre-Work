// Functions can be assigned default parameters. They will be used when no argument is passed into the called function. There is no limit to how many default values for parameters.

const increment = (function() {
  "use strict";
  return function increment(number, value=1) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
