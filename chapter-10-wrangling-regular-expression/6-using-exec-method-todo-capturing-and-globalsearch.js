const html = "<div class='test'><b>Hello</b> <i>world!</i></div>";
const tag = /<(\/?)(\w+)([^>]*?)>/g;
let match,
  num = 0;
while ((match = tag.exec(html)) !== null) {
  console.log(match.length === 4, "Every match finds each tag and 3 captures");
  num++;
}
console.log(num === 6, "3 opening and 3 closing tags found.");
