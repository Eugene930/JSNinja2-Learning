// * Listing 6.2 Controlling a generator through an iterator obejct
function* WeaponGenerator() {
  yield "Katana";
  yield "Wakizashi";
}

const weaponsIterator = WeaponGenerator();

const result1 = weaponsIterator.next();
console.log(
  typeof result1 === "object" && result1.value === "Katana" && !result1.done
);

const result2 = weaponsIterator.next();
console.log(
  typeof result2 === "object" && result2.value === "Wakizashi" && !result2.done
);

const result3 = weaponsIterator.next();
console.log(
  typeof result3 === "object" && result3.value === undefined && result3.done
);

// * Listing 6.3 Iterating over generator results with a while loop
const weaponsIterator2 = WeaponGenerator();
let item;
while (!(item = weaponsIterator2.next()).done) {
  console.log(item !== null, item.value);
}
