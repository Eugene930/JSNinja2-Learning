const ninjas = ["Kuma", "Hattori", "Yagyu"];
const samurai = ["Hattori", "Oda", "Tomoe"];

// * 9.21 Using sets to perform a union of collections
const warriors = new Set([...ninjas, ...samurai]);

// * 9.22 Intersection of sets
const ninjaSamurai = new Set([...ninjas].filter((ninja) => samurai.has(ninja)));

// * 9.23 Difference of sets
const pureNinjas = new Set([...ninjas].filter((ninja) => !samurai.has(ninja)));
