const html = "<b>Hello</b>\n<i>world!</i>";
console.log(
  /.*/.exec(html)[0] === "<b>Hello</b>",
  "A normal capture doesn't handle endlines"
);
console.log(
  /[\S\s]*/.exec(html)[0] === "<b>Hello</b>\n<i>world!</i>",
  "Matching everything with a character set."
);
console.log(
  /(?:.|\s)*/.exec(html)[0] === "<b>Hello</b>\n<i>world!</i>",
  "Using a non-capturing group to match everything"
);

// * Listing 10.12 Matching Unicode characters
const text = "\u5FCD\u30D1\u30EF\u30FC";
const matchAll = /[\w\u0080-\uFFF_-]+/;
console.log(text.match(matchAll), "Our regexp matches non-ASCII");
