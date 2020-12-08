const { assert } = require("../assert");

// * Listing 7.7 Trying to achieve inheritance with prototypes
function Person() {}
Person.prototype.dance = function () {};

function Ninja() {}
Ninja.prototype = { dance: Person.prototype.dance };

const ninja = new Ninja();
assert(ninja instanceof Ninja);
assert(!(ninja instanceof Person)); // * That's not inheritance -- it's just copying
assert(ninja instanceof Object);

// * The best technique for creating a prototype chain is to use an instance of an object as the other object's prototype.
