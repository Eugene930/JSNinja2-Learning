const { assert } = require("../assert");

// * Listring 7.5 Examing the type of an instance and its constructro
function Ninja() {}
const ninja = new Ninja();

assert(typeof ninja === "object", "The type of the instance is object");
assert(ninja instanceof Ninja, "instanceof identifies the constructor");
assert(
  ninja.constructor === Ninja,
  "The ninja object was created by the Ninja function"
);

// * Listing 7.6 Instantiating a new object using a reference to a constructor
function Ninja() {}

const ninja1 = new Ninja();
const ninja2 = new ninja1.constructor();

assert(ninja2 instanceof Ninja, "It's a Ninja!");
assert(ninja1 !== ninja2, "But not the same Ninja!");
