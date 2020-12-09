const { assert } = require("../assert");

// * Listing 8.6
const shogun = {
  name: "Yoshiaki",
  clan: "Ashikaga",
  get fullTitle() {
    return this.name + " " + this.clan;
  },
  set fullTitle(value) {
    const segments = value.split(" ");
    this.name = segments[0];
    this.clan = segments[1];
  },
};

assert(shogun.name === "Yoshiaki");
assert(shogun.clan === "Ashikaga");
assert(shogun.fullTitle === "Yoshiaki Ashikaga");

shogun.fullTitle = "Ieyasu Tokugawa";
assert(shogun.name === "Ieyasu");
assert(shogun.clan === "Tokugawa");
assert(shogun.fullTitle === "Ieyasu Tokugawa");
