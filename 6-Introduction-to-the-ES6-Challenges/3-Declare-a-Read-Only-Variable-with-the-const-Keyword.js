// The const declaration is similar to let. The big difference is that the variable will be read-only and cannot be reassigned.

// Constants are named in UPPERCASE_LETTERS with an underscore to separate words

function printManyTimes(str) {
  "use strict";

  // change code below this line

  const SENTENCE = str + " is cool!";
  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");
