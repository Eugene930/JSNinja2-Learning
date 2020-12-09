const { assert } = require("../assert");
// * Listing 8.4

function Ninja() {
  let _skillLevel = 0;

  Object.defineProperty(this, "skillLevel", {
    get: () => {
      console.log("The get method is called");
      return _skillLevel;
    },
    set: (value) => {
      console.log("The method is called");
      _skillLevel = value;
    },
  });
}

const ninja = new Ninja();

assert(
  typeof ninja._skillLevel === "undefined",
  "we cannot access a 'private' property"
);
assert(ninja.skillLevel === 0, "The getter works fine!");

ninja.skillLevel = 10;
assert(ninja.skillLevel === 10, "The value was updated.");
