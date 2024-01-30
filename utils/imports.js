// ? Having fun with my npm module
// ! Doesn't effect runtime, just colorizes something trivial in the terminal when seeding
const colors = require("jbassard97nodecolors");
let { BoldText, BlackText, CSSkeywordBackground } = colors;

const fancyLog = (text) => {
  let output = `${CSSkeywordBackground(
    BlackText(BoldText(text)),
    "mediumturquoise"
  )}`;
  return output;
};

module.exports = fancyLog;
