// !== strictly not equal. The strict inequality operator uses the opposite logic of the strict equality operator and will not perform data type conversions.

// 1 !== 1 returns false, 1 !== "1" returns true

// Setup
function testStrictNotEqual(val) {
  // Only Change Code Below this Line

  if (val !== 17) {

  // Only Change Code Above this Line

    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testStrictNotEqual(17);
