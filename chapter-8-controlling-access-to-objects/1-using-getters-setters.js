const { assert } = require("../assert");

// * Using getters and setters to guard private properities
function Ninja() {
  let skillLevel;
  this.getSkillLevel = () => skillLevel;

  this.setSkillLevel = (value) => {
    skillLevel = value;
  };
}

const ninja = new Ninja();
ninja.setSkillLevel(100);
assert(ninja.getSkillLevel() === 100, "Our ninja is at level 100!");
