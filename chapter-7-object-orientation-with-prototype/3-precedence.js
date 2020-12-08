const { assert } = require("../assert");

// * Listing 7.3 Observing the precedence of initialization activities

function Ninja() {
  this.swung = false;
  this.swingSword = function () {
    return !this.swung;
  };
}

Ninja.prototype.swingSword = function () {
  return this.swung;
};

const ninja = new Ninja();
assert(
  ninja.swingSword(),
  "Called the instance method, not the prototype method."
);

// ! doing it here just to demonstrate the precedence of properties
