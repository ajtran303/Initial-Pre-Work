// This function updates a record collection stored as a JSON object.

// When the function is called, three arguments are passed: a record id, a property of the album, and the value for that property.

// The first if statement will add a track to the nested array of tracks in the record if the passed property is called tracks and if the value is not a blank string.

// The first else statement concerns if the property is not called tracks. It has nested if statment to add a track to the end of the track array if there is already such an array. Otherwise it will create one.

// The else if statement concerns properties that are not the tracks. If the value is not a blank string, then it will create a new property in the object and set it to the value.

// If there is a blank entry for a value, that blank property section will be deleted.

// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line

function updateRecords(id, prop, value) {
  if (prop === "tracks" && value !== "") {

   if (collection[id][prop]) {
    collection[id][prop].push(value);
   }
   else {
    collection[id][prop] = [value];
   }

  } else if (value !== "") {
    collection[id][prop] = value;
  } else {
    delete collection[id][prop];
  }

  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
