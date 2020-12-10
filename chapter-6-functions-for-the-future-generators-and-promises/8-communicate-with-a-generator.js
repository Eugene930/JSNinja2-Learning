// * Listing 6.8 Sending data to and receiving data from a generator

function* NinjaGenerator(action) {
  const imposter = yield "Hattori " + action;

  console.log(imposter === "Hanzo", "The generator has been infiltrated");

  yield "Yoshi (" + imposter + ") " + action;
}

const ninjaIterator = NinjaGenerator("skulk");

// ! This call starts the generator, which calculate the value of the expression, yields the value, and suspends the generator's execution.
const result1 = ninjaIterator.next();
console.log(result1.value === "Hattori skulk", "Hattori is skulking");

// ! The next method supplies the value to the waiting yield expression.
const result2 = ninjaIterator.next("Hanzo");
console.log(result2.value === "Yoshi (Hanzo) skulk", "We have an imposter");
