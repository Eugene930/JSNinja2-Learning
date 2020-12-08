const { assert } = require("../assert");

// * Listing-7-1 Creating a new instance with a prototyped method
function Ninja() {}
Ninja.prototype.swingSword = function () {
  return true;
};

const ninja1 = Ninja();
assert(ninja1 === undefined, "No instance of Ninja created");

const ninja2 = new Ninja();
assert(
  ninja2 && ninja2.swingSword && ninja2.swingSword(),
  "Instance exitst and method is callable."
);
