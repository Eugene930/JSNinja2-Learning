function* WeaponGenerator() {
  yield "Katana";
  yield "Wakizashi";
  yield "Kusarigama";
}

for (let weapon of WeaponGenerator()) {
  console.log(weapon !== undefined, weapon);
}
