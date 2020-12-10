// * Listing 11.5 Exporting from a Ninja.js module
const ninja = "Yoshi";
export const message = "Hello";

export function sayHiToNinja() {
  return message + " " + ninja;
}

// * Listing 11.6 Exporting at the end of a module
const ninja = "Yoshi";
const message = "Hello";

function sayHiToNinja() {
  return message + " " + ninja;
}

export { message, sayHiToNinja };

// * Listring 11.7 Importing from the Ninja.js module
import { message, sayHiToNinja } from "Ninja.js";

console.log(message === "Hello");
console.log(sayHiToNinja() === "Hello Yoshi");

console.log(
  typeof ninja === "undefined",
  "But we cannot access Yoshi directly"
);

// * Listing 11.8 Importing all named exports from the Ninja.js module
import * as ninjaModule from "Ninja.ja";

console.log(ninjaModule.message === "Hello");
console.log(ninjaModule.sayHiToNinja() === "Hello Yoshi");

console.log(typeof ninjaModule.ninja === "undefined");

// * Listing 11.9 A default export from Ninja.js
export default class Ninja {
  constructor(name) {
    this.name = name;
  }
}

export function compareNinjas(ninja1, ninja2) {
  return ninja1.name === ninja2.name;
}

// * Listring 11.10 Importing a default export
import ImportedNinja from "Ninja.js";
import { compareNinjas } from "Ninja.js";

const ninja1 = new ImportedNinja("Yoshi");
const ninja2 = new ImportedNinja("Hattori");

console.log(ninja1 !== undefined && ninja2 !== undefined);
console.log(!compareNinjas(ninja1, ninja2));

// * Renaming exports and imports
// *--------- rename exports -----------/
// ********** Greetings.js ************/
function sayHi() {
  return "Hello";
}
console.log(typeof sayHi === "function" && typeof sayHello === "undefined");
export { sayHi as sayHello };
// ************ main.js **************/
import { sayHello } from "Greentings.js";
console.log(typeof sayHi === "undefined" && typeof sayHello === "function");

// *--------- rename imports ----------/
// ************ Hello.js *************/
import { greet as sayHello } from "Hello.js";
import { greet as salute } from "Salute.js";

console.log(typeof greet === "undefined");
console.log(sayHello() === "Hello" && salute() === "Salute");
