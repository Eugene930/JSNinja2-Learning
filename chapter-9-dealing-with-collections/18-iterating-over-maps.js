const directory = new Map();

directory.set("Yoshi", "+81 26 6462");
directory.set("Kuma", "+81 52 2378 6462");
directory.set("Yoshi", "+81 76 277 46");

for (let item of directory) {
  console.log(item[0] !== null, "Key:" + item[0]);
  console.log(item[1] !== null, "Value:" + item[1]);
}

for (let key of directory.keys()) {
  console.log(key !== null, "Key:" + key);
  console.log(directory.get(key) !== null, "Value:" + directory.get(key));
}

for (var value of directory.values()) {
  console.log(value !== null, "Value:" + value);
}
