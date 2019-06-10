// The named export syntax lets functions and variables from one file be used in another file.

// export default is used if only one value is being exported from a file

// It also creates a default, fallback value for an export. There can only be one default export from a module.

"use strict";
export default function subtract(x,y) {return x - y;}
