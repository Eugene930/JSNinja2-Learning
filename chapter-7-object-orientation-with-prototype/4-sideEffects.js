const { assert } = require("../assert");

// * Listing 7.4 With prototypes, everything can be changed at runtime
function Ninja() {
  this.swung = true;
}

const ninja1 = new Ninja();

Ninja.prototype.swingSword = function () {
  return this.swung;
};
assert(ninja1.swingSword(), "Method exists, even out of order");

// ! The function's prototype can be replaced at will. The already constructed instance reference the old prototype!
Ninja.prototype = {
  pierce: function () {
    return true;
  },
};

//  * The old prototype is still kept alive by the ninja1 instance
assert(ninja1.swingSword(), "Our ninja can still swing!");

// * Newly created objects will have a reference to  the new prototype.
const ninja2 = new Ninja();
assert(ninja2.pierce(), "Newly created ninjas can pierce");
assert(!ninja2.swingSword, "But they cannot swing!");
