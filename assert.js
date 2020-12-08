const assert = (condition, message) => {
  if (!condition) {
    console.log(
      "\x1b[31m%s\x1b[0m",
      "[Assertion failed]: " + (message || "No message.")
    );
  } else {
    console.log("\x1b[36m%s\x1b[0m", message || "No message.");
  }
};

module.exports = { assert };
