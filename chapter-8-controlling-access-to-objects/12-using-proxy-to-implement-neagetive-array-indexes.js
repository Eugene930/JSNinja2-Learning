const { assert } = require("../assert");

// * 8.12
function createNegativeArrayProxy(array) {
  if (!Array.isArray(array)) {
    throw new TypeError("Expected an array");
  }

  return new Proxy(array, {
    get: (target, index) => {
      index = +index;
      return target[index < 0 ? target.length + index : index];
    },
    set: (target, index, val) => {
      index = +index;
      return (target[index < 0 ? target.length + index : index] = val);
    },
  });
}

const ninjas = ["Yoshi", "Kuma", "Hattori"];
const proxiedNinjas = createNegativeArrayProxy(ninjas);

// assert(
//   ninjas[0] === "Yoshi" && ninjas[1] === "Kuma" && ninjas[2] === "Hattori"
// );

// assert(
//   proxiedNinjas[0] === "Yoshi" &&
//     proxiedNinjas[1] === "Kuma" &&
//     proxiedNinjas[2] === "Hattori"
// );

// assert(
//   ninjas[-1] === undefined &&
//     ninjas[-2] === undefined &&
//     ninjas[-3] === undefined
// );

// assert(
//   proxiedNinjas[-1] === "Hattori" &&
//     proxiedNinjas[-2] === "Kuma" &&
//     proxiedNinjas[-3] === "Yoshi"
// );

// proxiedNinjas[-1] = "Hachi";
// assert(proxiedNinjas[-1] === "Hachi" && ninjas[2] === "Hachi");

module.exports = {
  createNegativeArrayProxy,
};
