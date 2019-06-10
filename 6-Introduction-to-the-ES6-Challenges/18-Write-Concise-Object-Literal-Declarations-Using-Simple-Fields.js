// ES6 allows for easier writing of objects. The object literal notation will automatically create key-value pairs for the object without having to write out the whole thing.

// In the example below, the variable createPerson has parameters name, age, and gender. The arrow notation returns an object with key-values name, age and gender.

// The object's values are passed as arguments in the last function to return a new object.

const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
 ({ name, age, gender});
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
