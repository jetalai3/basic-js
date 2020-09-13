const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  return { turns: Math.pow(2, disksNumber) - 1, seconds: Math.floor((3600 / turnsSpeed) * (Math.pow(2, disksNumber) - 1)) };
};
