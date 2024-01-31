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

const { addHours } = require("date-fns");

const getCurrentDateTime = () => {
  const currentDateTime = new Date();
  const formattedDateTime = addHours(currentDateTime, 0);
  return formattedDateTime;
};

module.exports = { fancyLog, getCurrentDateTime };
