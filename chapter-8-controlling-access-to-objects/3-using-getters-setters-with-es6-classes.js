const { assert } = require("../assert");

// * Listing 8.3 Using getters and setters with ES6 classes
class NinjaCollection {
  constructor() {
    this.ninjas = ["Yoshi", "Kuma", "Hattori"];
  }
  get firstNinja() {
    console.log("Getting firstNinja");
    return this.ninjas[0];
  }
  set firstNinja(value) {
    console.log("Setting firstNinja");
    this.ninjas[0] = value;
  }
}

const ninjaCollection = new NinjaCollection();

assert(ninjaCollection.firstNinja === "Yoshi", "Yoshi is the first ninja");

ninjaCollection.firstNinja = "Hachi";

assert(
  ninjaCollection.firstNinja === "Hachi" &&
    ninjaCollection.ninjas[0] === "Hachi"
);
