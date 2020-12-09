const { assert } = require("../assert");

function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

isPrime = new Proxy(isPrime, {
  apply: (target, thisArg, args) => {
    console.time("isPrime");

    const result = target.apply(thisArg, args);

    console.timeEnd("isPrime");

    return result;
  },
});

isPrime(1299827);
