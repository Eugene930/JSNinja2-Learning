const { assert } = require("../assert");

// * Listing 7.12 Watch out for changes to constructor prototypes

function Ninja() {}

const ninja = new Ninja();

assert(ninja instanceof Ninja, "Our ninja is a Ninja!");

Ninja.prototype = {};

assert(!(ninja instanceof Ninja), "The ninja is now not a Ninja!?");

// ! The instanceof operator checks only whether the prototype of the function on the right side is in the prototype chain of the object on the left side
