const { assert } = require("../assert");

// * Listing 7.10 Fixing the constructor peoperty problem
function Person() {}
Person.prototype.dance = function () {};

function Ninja() {}
Ninja.prototype = new Person();

Object.defineProperty(Ninja.prototype, "constructor", {
  enumerable: false,
  value: Ninja,
  writeable: true,
});

var ninja = new Ninja();

assert(
  ninja.constructor == Ninja,
  "Connection from ninja instances to Ninja constructor reestablished!"
);

for (let prop in Ninja.prototype) {
  assert(prop === "dance", "The only enumerable property is dance!");
}
