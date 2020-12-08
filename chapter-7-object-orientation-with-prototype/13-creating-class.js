const { assert } = require("../assert");

// * Listing 7.13 Creating a class in ES6

class Ninja {
  constructor(name) {
    this.name = name;
  }
  swingSword() {
    return true;
  }
}

var ninja = new Ninja("Yoshi");

assert(ninja instanceof Ninja, "Our ninja is a Ninja");
assert(ninja.name === "Yoshi", "named Yoshi");
assert(ninja.swingSword(), "and he can swing the sword");

// * Code above can be translated to functionally identical es5 code:
// function Ninja(name) {
//   this.name = name;
// }
// Ninja.prototype.swingSword = function () {
//   return true;
// };
