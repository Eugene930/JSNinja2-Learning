const { assert } = require("../assert");

// * Listing 8.7

const emperor = { name: "Komei" };
const representative = new Proxy(emperor, {
  get: (target, key) => {
    console.log("Reading " + key + " through a proxy");
    return key in target ? target[key] : "Don't bother the emperor!";
  },
  set: (target, key, value) => {
    console.log("Writing " + key + " through a proxy");
    target[key] = value;
  },
});

assert(emperor.name === "Komei");
assert(representative.name === "Komei");

assert(emperor.nickname === undefined);
assert(representative.nickname === "Don't bother the emperor!");

representative.nickname = "Tenno";
assert(emperor.nickname === "Tenno");
assert(representative.nickname === "Tenno");
