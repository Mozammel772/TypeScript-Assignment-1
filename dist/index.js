"use strict";
function formatString(input, toUpper) {
    return toUpper !== false ? input.toUpperCase() : input.toLowerCase();
}
console.log(formatString("Hello"));
console.log(formatString("Mozamml23", true));
console.log(formatString("Hello", false)); // "hello"
