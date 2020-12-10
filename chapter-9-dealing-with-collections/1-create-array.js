// * Using array literals to create array is preferred over creating arrays with the Array constructor.
// * The primary reason is simplicity: [] versus new Array(), in addition, Javascript is highly dynamic, nothing stops someone from overriding the built-in Array constructor, whilch means calling `new Array()` doesn't necessarily have to create an array

const { assert } = require("../assert");

const ninjas = ["K", "H", "Y"];
const samurai = new Array("O", "T");

assert(ninjas.length === 3);
assert(samurai.length === 2);

assert(ninjas[0] === "K");
assert(samurai[samurai.length - 1] === "T");

assert(ninjas[4] === undefined);
ninjas[4] = "I";
assert(ninjas.length === 5, "Arrays are automatically expanded");

ninjas.length = 2;
assert(ninjas.length === 2);
assert(ninjas[0] === "K" && ninjas[1] === "H");
assert(ninjas[2] === undefined, "But we've lost Y");
