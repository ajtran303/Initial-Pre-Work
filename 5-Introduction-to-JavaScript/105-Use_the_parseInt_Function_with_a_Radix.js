// An additional argument for parseInt() is radix. Radix specifies the base of the number of the string. The function will return an integer in base 10.

// We learned about bases in the Hexcodes unit, base 16. We count normally in base 10. Binary is base 2.

// parseInt(string, radix);

function convertToInteger(str) {
  return parseInt(str, 2);
}

console.log(convertToInteger("10011"));
