// The conditional/ternary operator can be chained together to check multiple conditions.

function checkSign(num) {
  return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";
  }

console.log(checkSign(3));
