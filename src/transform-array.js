const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error;
  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next' && i < arr.length - 1) {
      i+=1;
    } else  if (i > 0 && arr[i] === '--discard-prev' ) {
      resultArr.pop();
    } else if (arr[i] === '--double-next' && i < arr.length - 1) {
      resultArr.push(arr[i + 1], arr[i + 1]);
    } else if (i > 0 && arr[i] === '--double-prev') {
      resultArr.push(arr[i - 1]);
    } else {
      resultArr.push(arr[i]);
    }
  }
  return resultArr;
};
