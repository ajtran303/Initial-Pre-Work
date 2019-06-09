// This blackjack card counting app will increment a counter to determine whether a player should hold or bet.

// The cc function has two parts. First, the card value is evaluated using a switch statement to determine how much is added or subtracted from the counter.

// Second, an if else statement will determine if the counter is positive, negative, or equal to 0. It will then display the current count and recommend to hold or bet.

var count = 0;

function cc(card) {
  // Only change code below this line
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      count;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  if (count > 0) {
    return count + " Bet"
  } else if (count <= 0) {
    return count + " Hold"
  }

  return "Change Me";
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
console.log(cc('A'));
console.log(cc(5));
console.log(cc("K"));
console.log(cc(6));
console.log(cc(3));
