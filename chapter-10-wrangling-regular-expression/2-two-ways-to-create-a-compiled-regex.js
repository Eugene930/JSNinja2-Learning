/**
 * ! Two main phases phase regex go through are: compilation and execution
 * * Compilation occurs when the regex is first created. Execution occurs when we use the compiled regex to match patterns to a string.
 * * For complex-expression, in particulr, we can begin to get some noticeable speed improvements by predefining(and thus precompiling) our regular expressions for later use.
 */

const re1 = /test/i;
const re2 = new RegExp("test", "i");

console.log(
  re1.toString() === "/test/i",
  "Verify the contents of the expression"
);
console.log(re1.test("TesT"), "Yes, it's case-insensitive");
console.log(re2.test("TesT"), "This one is too.");
console.log(
  re1.toString() === re2.toString(),
  "The regular expression are equal"
);
console.log(re1 !== re2, "But they are different objects.");

// * Both regex are in their compiled state after creation, compiling a regex once and storing it in a variable for later reference can be an important optimization.

// * The constructor(new RegExp(...)) allow us to build and compile an expression from a string that we can dynamically create at runtime.
