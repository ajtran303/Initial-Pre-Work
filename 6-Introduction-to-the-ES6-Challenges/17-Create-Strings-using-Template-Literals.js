// Template literals allow for easier creating of string literals. There is a ${variable} syntax which references a value inside of an object and serves as a placeholder that replaces the concatenation operator.

// The string uses `backticks` instead of quotations and is multi-line without needing line breaks \n.

// The string will literally display anything between the backticks.

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // change code below this line
  const resultDisplayArray = arr.map(display => `<li class="text-warning">${display}</li>`);
  // change code above this line

  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`,
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);

console.log((makeList(result.failure)))
