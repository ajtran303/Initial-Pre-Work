// ES6 allows code to be refactored when there are functions within objects by omitting the function keyword and its preceding colon.

// change code below this line
const bicycle = {
  gear: 2,
  setGear (newGear) {
    "use strict";
    this.gear = newGear;
  }
};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
