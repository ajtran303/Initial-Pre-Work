// Math.floor() will round a decimal value down to the nearest whole number.

// To get a random whole number, the decimal from Math.random() needs to be multipled by a factor of 10 and then passed through the Math.floor() function.

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

// returns a number between 1 and 19

  // Only change code below this line.

  return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum())

// returns a number between 1 and 9
