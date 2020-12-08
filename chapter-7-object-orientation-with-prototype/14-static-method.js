const { assert } = require("../assert");

// * Listing 7.14 Static methods in ES6
class Ninja {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  swingSword() {
    return true;
  }

  static compare(ninja1, ninja2) {
    return ninja1.level - ninja2.level;
  }
}

var ninja1 = new Ninja("Yoshi", 4);
var ninja2 = new Ninja("Hattori", 3);

assert(
  !("compare" in ninja1) && !("compare" in ninja2),
  "A ninja instance doesn't know how to compare"
);
assert(
  Ninja.compare(ninja1, ninja2) < 0,
  "The Ninja class can do the comparison!"
);
assert(!("swingSword" in Ninja), "The Ninja class cannot swing a sword");

// * Extends the constructor function with a method to mimic static methods in pre-ES6 code
// function Ninja() {}
// Ninja.compare = function (ninja1, ninja2) {
//     ...
// }
