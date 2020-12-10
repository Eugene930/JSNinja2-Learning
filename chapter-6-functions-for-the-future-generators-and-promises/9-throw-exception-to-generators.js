function* NinjaGenerator() {
  try {
    yield "Hattori";
    console.log("The expected exception didn't occur");
  } catch (e) {
    console.log(e === "Catch this!", "Aha! We caught an exception");
  }
}

const ninjaIterator = NinjaGenerator();

const result1 = ninjaIterator.next();

console.log(result1.value === "Hattori", "We got Hattori");

ninjaIterator.throw("Catch this!");
