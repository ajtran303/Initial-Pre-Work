// The spread operator looks like the rest operator.

// It is used to manipulate elements of already existing arrays.

// I used this video lecture: https://www.youtube.com/watch?feature=player_embedded&v=iLx4ma8ZqvQ

/// ...arr will unpack the array and return it as a comma separated list and only works in an argument or in another array.

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);
