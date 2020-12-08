const { assert } = require("../assert");

// * Listing 7.8 Achieving inheritances with prototypes
function Person() {}
Person.prototype.dance = function () {};

function Ninja() {}
/**
 * *This preserves the prototype chain, because the prototype of the Ninja instace will be an instance of the Person, which has a prototype with all the properities of Person and in turn have a prototype pointing to an instance of its superclass. */
// TODO: fix constructor lost problem
Ninja.prototype = new Person();

// * The old prototype is left alone, nobody is referencing it, it will be deleted.
const ninja = new Ninja();

// ! When we perform an instanceof operation, we can determine whether the function inherits the functionality of any object in its prototype chian.
assert(ninja instanceof Ninja);
assert(ninja instanceof Person);
assert(ninja instanceof Object);
assert(typeof ninja.dance === "function");

// ! side effct: all inherited function prototypes will continue to live-update.
