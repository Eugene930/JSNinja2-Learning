const { assert } = require("../assert");

// ? property descriptor: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

// * Listing 7.9 Configuring properties

var ninja = {};
ninja.name = "Yoshi";
ninja.weapon = "kusarigama";

Object.defineProperty(ninja, "sneaky", {
  configurable: false,
  enumerable: false,
  value: true,
  writable: true,
});

assert("sneaky" in ninja, "We can acess the new property");

for (let prop in ninja) {
  assert(prop !== undefined, "An enumerated property:" + prop);
  //   name, weapon
}
