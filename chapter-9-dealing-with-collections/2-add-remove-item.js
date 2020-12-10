const { assert } = require("../assert");

// * Listing 9.2
const ninjas = [];
assert(ninjas.length === 0);

ninjas.push("Kuma");
assert(ninjas[0] === "Kuma");
assert(ninjas.length === 1);

ninjas.push("Hattori");
assert(ninjas[0] === "Kuma");
assert(ninjas[1] === "Hattori");
assert(ninjas.length === 2);

// unshift adds an item to the end of the array
ninjas.unshift("Yagu");
assert(ninjas[0] === "Yagu");
assert(ninjas[1] === "Kuma");
assert(ninjas[2] === "Hattori");
assert(ninjas.length === 3);

const lastNinja = ninjas.pop();
assert(lastNinja === "Hattori");
assert(ninjas[0] === "Yagu");
assert(ninjas[1] === "Kuma");
assert(ninjas.length === 2);

const firstNinja = ninjas.shift();
assert(firstNinja === "Yagu");
assert(ninjas[0] === "Kuma");
assert(ninjas.length === 1);
