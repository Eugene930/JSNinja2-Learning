// * Listing 9.19
function Set() {
  this.data = {};
  this.length = 0;
}

Set.prototype.has = function (item) {
  return typeof this.data[item] !== "undefined";
};

Set.prototype.add = function (item) {
  if (!this.has(item)) {
    this.data[item] = true;
    this.length++;
  }
};

Set.prototype.remove = function (item) {
  if (this.has(item)) {
    delete this.data[item];
    this.length--;
  }
};

const ninjas = new Set();
ninjas.add("Hattori");
ninjas.add("Hattori");

console.log(ninjas.has("Hattori") && ninjas.length === 1);

ninjas.remove("Hattori");
console.log(!ninjas.has("Hattori") && ninjas.length === 0);
