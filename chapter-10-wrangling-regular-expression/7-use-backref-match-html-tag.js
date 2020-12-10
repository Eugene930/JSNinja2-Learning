const html = "<b class='hello'>Hello</b> <i>world!</i>";
const pattern = /<(\w+)([^>]*)>(.*?)<\/\1>/g;

let match = pattern.exec(html);
console.log(match[1] === "b", "The tag name.");
console.log(match[2] === " class='hello'", "The tag attributes.");
console.log(match[3] === "Hello", "The contents of the tag.");

match = pattern.exec(html);

console.log(match[0] === "<i>world!</i>", "The entire tag, start to finish");
console.log(match[1] === "i", "The tag name.");
console.log(match[2] === "", "The tag attributes.");
console.log(match[3] === "world!", "The contents of the tag.");
