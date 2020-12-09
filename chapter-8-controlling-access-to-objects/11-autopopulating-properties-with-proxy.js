const { assert } = require("../assert");

// * Listing 8.11
function Folder() {
  return new Proxy(
    {},
    {
      get: (target, property) => {
        console.log("Reading " + property);

        if (!(property in target)) {
          target[property] = new Folder();
        }

        return target[property];
      },
    }
  );
}

const rootFolder = new Folder();

try {
  rootFolder.ninjaDir.firstNinjaDir.ninjaFile = "youshi.txt";
  console.log("An exception wasn't raised");
} catch (e) {
  console.log("An exception has occurred");
}
