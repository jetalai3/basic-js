const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let { separator, repeatTimes, addition, additionRepeatTimes, additionSeparator } = options;
  if (!separator) separator = '+';
  if (!additionSeparator) additionSeparator = '|';
  if (!repeatTimes) repeatTimes = 1;
  if (addition === null) addition = 'null';
  if (str === null) str = 'null';
  if (!additionRepeatTimes) additionRepeatTimes = 1;
  let resultArray = [];
  let additionalArray = [];
  if (addition !== undefined) {
    for (let i = 0; i < additionRepeatTimes; i++) {
      additionalArray.push(addition.toString());
    }
  }
  let additionalString = additionalArray.join(additionSeparator.toString());
  for (let i = 0; i < repeatTimes; i++) {
    resultArray.push(str.toString() + additionalString);
  }
  let resultString = resultArray.join(separator.toString());
  return resultString;
};
