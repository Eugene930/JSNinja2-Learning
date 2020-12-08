const { assert } = require("../assert");

// * Listing 7.15 Inheritance in ES6
class Person {
  constructor(name) {
    this.name = name;
  }
  dance() {
    return true;
  }
}

class Ninja extends Person {
  constructor(name, weapon) {
    super(name);
    this.weapon = weapon;
  }

  wieldWeapon() {
    return true;
  }
}

var person = new Person("Bob");

assert(person instanceof Person, "A person is a person");
assert(person.dance(), "A person can dance");
assert(person.name === "Bob", "We can call it by name.");
assert(!(person instanceof Ninja), "But it's not a Ninja");
assert(!("wieldWeapon" in person), "And it cannot wield a weapon");

var ninja = new Ninja("Yoshi", "Wakizashi");
assert(ninja instanceof Ninja, "A ninja's a ninja");
assert(ninja.wieldWeapon, "That can wield a weapon");
assert(ninja instanceof Person, "But it's also a person");
assert(ninja.name === "Yoshi", "That has a name");
assert(ninja.dance(), "And enjoy dancing");
