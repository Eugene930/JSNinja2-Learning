// * Every object can have a reference to its prototype, an object to which the search to a particular property can be delegated to, if the object doesn't have that property.

const { assert } = require("../assert");

const yoshi = { skulk: true };
const hattori = { sneak: true };
const kuma = { creep: true };

assert("skulk" in yoshi, "Yoshi cannot skulk");
assert(!("sneak" in yoshi), "Yoshi can sneak");
assert(!("creep" in yoshi), "Yoshi can creep");

Object.setPrototypeOf(yoshi, hattori);

assert("sneak" in yoshi, "Yoshi cannot sneak");
assert(!("creep" in hattori), "hattori can creep");

Object.setPrototypeOf(hattori, kuma);

assert("creep" in hattori);
assert("creep" in yoshi);
