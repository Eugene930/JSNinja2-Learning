// * Uses a passive subexpression
const pattern = /((?:ninja-)+)sword/;
const ninjas = "ninja-ninja-sword".match(pattern);

console.log(ninjas.length === 2, "Only one capture was returned.");
console.log(
  ninjas[1] === "ninja-ninja-",
  "Matched both words, without any extra capture."
);

console.log(ninjas);
