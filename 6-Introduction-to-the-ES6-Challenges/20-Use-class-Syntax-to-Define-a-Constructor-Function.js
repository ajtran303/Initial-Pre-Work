// ES6 uses the class keyword to create new objects from a "template". It uses a constructor that is referenced when the new keyword is called to create a new object.

// this is a keyword that refers to the object it belongs to. In this function, this.name refers to the Vegetable class.

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Vegetable {
    constructor(name){
      this.name = name;
    }
  }
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
