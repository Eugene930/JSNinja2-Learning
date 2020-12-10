function compress(source) {
  const keys = {};
  source.replace(/([^=&]+)=([^&]*)/g, function (full, key, value) {
    keys[key] = (keys[key] ? keys[key] + "," : "") + value;
  });
  const result = [];
  for (let key in keys) {
    result.push(key + "=" + keys[key]);
  }
  return result.join("&");
}

console.log(
  compress("foo=1&foo=2&blah=a&blah=b&foo=3") === "foo=1,2,3&blah=a,b",
  "Compression is OK!"
);
