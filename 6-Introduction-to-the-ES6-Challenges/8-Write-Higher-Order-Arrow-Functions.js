// Arrow functions are good with higher order functions.

// These functions include map(), filter(), and reduce() and are used for processing lots of data. They take functions as arguments, so using arrow functions will allow for more concise writing. They might also return a function.

// Below more information from Mozilla documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_() and from YouTube tutorial https://www.youtube.com/watch?v=H4awPsyugS0

// I did a lot of searching to find this answer. I found a good explanation for the solution code at https://stackoverflow.com/questions/54180865/javascript-filter-integers

// const squaredIntegers = arr.filter((p) => p > 0 && p % 1 === 0).map((p) => p*p);

// const squaredIntegers = arr.filter(q).map(q);

// The filter method creates a new array that uses elements that meet the conditions specified in the function passed into it.

// arr.filter((p) => p > 0 && p % 1 === 0);

// Return p when it is a value greater than zero and when its remainder is strictly equal to zero when divided by one. Only whole numbers will yield no remainder.

// arr.filter(p...).map((p) => p*p);

// The map method creates a new array. The contents are from a function that is passed into it.

// (p) => p*p) This function returns p as p squared.


const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr.filter((p) => p > 0 && p % 1 === 0).map((p) => p*p);
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
