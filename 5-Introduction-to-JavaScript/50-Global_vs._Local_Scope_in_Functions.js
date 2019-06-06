// A local variable will have precedence over a global variable when both have the same name.

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();
