// * Listing 9.14

const { assert } = require("../assert");

const dictionary = {
  ja: {
    "Ninjas for hire": "忍者を雇う",
  },
  zh: {
    "Ninjas for hire": "忍者出租",
  },
  ko: {
    "Ninjas for hire": "고용을위한 닌자",
  },
};

assert(dictionary.ja["Ninjas for hire"] === "忍者を雇う");

// ! all object have prototypes
// ! In addition, with object keys can only be string values, if you want to create a mapping for any other value, that value will be silently converted into a string without anyone asking you anything.
assert(
  typeof dictionary.ja["constructor"] === "undefined",
  dictionary.ja["constructor"]
);
