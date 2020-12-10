const { assert } = require("../assert");

const ninjas = ["Yagyu", "Kuma", "Hattori", "Fuma"];

var removedItems = ninjas.splice(1, 1);

assert(removedItems.length === 1);
assert(removedItems[0] === "Kuma");

assert(ninjas.length === 3);
assert(ninjas[1] === "Hattori");

removedItems = ninjas.splice(1, 2, "Mochizuki", "Yoshi", "Momochi");
assert(removedItems.length === 2);
assert(removedItems[0] === "Hattori");
assert(removedItems[1] === "Fuma");

assert(ninjas.length === 4);
assert(ninjas[1] === "Mochizuki");
assert(ninjas[3] === "Momochi");
