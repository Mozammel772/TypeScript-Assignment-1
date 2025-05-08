function formatString(input, toUpper) {
    return toUpper !== false ? input.toUpperCase() : input.toLowerCase();
}
// ব্যবহার:
console.log(formatString("Hello")); // "HELLO"
console.log(formatString("Hello", true)); // "HELLO"
console.log(formatString("Hello", false)); // "hello"
console.log("hel");
