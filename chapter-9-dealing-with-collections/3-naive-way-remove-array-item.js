const { assert } = require("../assert");

// * Listing 9.3
const ninjas = ["Yagyu", "Kuma", "Hattori", "Fuma"];

delete ninjas[1];

assert(ninjas.length === 4);

assert(ninjas[1] === undefined);
