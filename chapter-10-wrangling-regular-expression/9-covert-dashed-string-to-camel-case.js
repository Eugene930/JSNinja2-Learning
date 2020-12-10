// * when the replacement value(the second argument) is a function, it's invoked for each match fonud (remember that a global search will match all instances of the pattern in the source string) with a variable list of parameters.

/**
 *
 * @param {The full text of the match} all
 * @param {The captures of the match, *one parameter for each*} letter
 * @param {The index of the match within the original string}
 * @param {The source string}
 */

function upper(all, letter) {
  return letter.toUpperCase();
}

console.log(
  "border-bottom-width".replace(/-(\w)/g, upper) === "borderBottomWidth",
  "Camel cased a hyphenated string."
);
