// ES6 introduces another way to declare variables with let. It is useful for debugging because it will declare a unique name for a variable that will not be overwritten.

// "use strict" enables Strict Mode which will throw errors for common mistakes

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
