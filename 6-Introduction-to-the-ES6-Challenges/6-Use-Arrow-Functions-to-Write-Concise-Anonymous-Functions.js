// Some functions do not need to be named. An example is when a function is passed as an argument for another function. Use arrow function syntax to create an anonymous inline function.

// var magic = function() {
//  "use strict";
//  return new Date();
// };

const magic = () => new Date();

console.log(magic())
