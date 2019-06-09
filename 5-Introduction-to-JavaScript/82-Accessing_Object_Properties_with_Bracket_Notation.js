// Bracket notation [] is used to access an object's property if there is a space in the name of the property. The name must be referenced with quotes. It can also be used when a property name does not have a space.

// Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj["an entree"];   // Change this line
var drinkValue = testObj["the drink"];    // Change this line

console.log((entreeValue))
