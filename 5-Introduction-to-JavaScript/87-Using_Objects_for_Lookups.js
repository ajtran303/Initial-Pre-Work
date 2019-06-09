// Objects can be used instead of switch statements or if/else chains when input data is limited within a known range. "Tabular data"

// The FCC lesson says that objects are like key/value storage, which are what dictionaries are in Python.

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line

var lookup = {
  "alpha": "Adams",
  "bravo": "Boston",
  "charlie": "Chicago",
  "delta": "Denver",
  "echo": "Easy",
  "foxtrot": "Frank"
  };

lookup["alpha"];
lookup["bravo"];
lookup["charlie"];
lookup["delta"];
lookup["echo"];
lookup["foxtrot"];

var result = lookup[val];

  // Only change code above this line
  return result;
}

// Change this value to test
console.log(phoneticLookup("bravo"));
