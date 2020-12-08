const { assert } = require("../assert");

// ? In Javascript, the instanceof operator works on the prototype chain of the object.

// * Listing 7.11 Studying the instanceof operator
function Person() {}
function Ninja() {}

Ninja.prototype = new Person();

const ninja = new Ninja();

assert(ninja instanceof Ninja);
assert(ninja instanceof Person);
