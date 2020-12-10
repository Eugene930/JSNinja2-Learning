// * ------------ AMD --------------
define("MouseCounterModule", ["JQuery"], ($) => {
  let numClicks = 0;
  const handleClick = () => {
    alert(++numClicks);
  };

  return {
    countClicks: () => {
      $(document).on("click", handleClick);
    },
  };
});

// * -------------------------------------------

// * ------------- CommonJS --------------------
// * MouseCounterModule.js
const $ = require("JQuery");
let numClicks = 0;
const handleClick = () => {
  alert(++numClicks);
};

module.exports = {
  countClicks: () => {
    $(document).on("click", handleClick);
  },
};

// * To include out module within a different file, we can write this:
const MouseCounterModule = require("MouseCounterModule.js");
MouseCounterModule.countClicks();

// ! CommonJS is the default module format for Node.js. But it's not explicitly built with the browser in mind, we can achieve this with either Browserify or RequireJS.
