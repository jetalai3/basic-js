const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
    this.depthArray = [];
  }
  calculateDepth(arr, count = 0) {
    count += 1;
    this.depthArray.push(count);
    arr.forEach( e =>  {
      if (Array.isArray(e)) {
        this.calculateDepth(e, count);
      }
    });
    return this.depthArray.sort((a, b) => a - b).shift();
  }
};