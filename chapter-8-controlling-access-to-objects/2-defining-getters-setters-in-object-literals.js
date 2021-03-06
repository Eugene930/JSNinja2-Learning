const { assert } = require("../assert");

// * Listing 8.2

const ninjaCollection = {
  ninjas: ["Yoshi", "Kuma", "Hattori"],
  get firstNinja() {
    console.log("Getting firstNinja");
    return this.ninjas[0];
  },
  set firstNinja(value) {
    console.log("Setting firstNinja");
    this.ninjas[0] = value;
  },
};

assert(ninjaCollection.firstNinja === "Yoshi", "Yoshi is the first ninja");

ninjaCollection.firstNinja = "Hachi";

assert(
  ninjaCollection.firstNinja === "Hachi" &&
    ninjaCollection.ninjas[0] === "Hachi"
);

// * The getter/setter method is called, and a matching execution context is created and pushed on the stack.
