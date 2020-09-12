const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
   this.chain.push(value);
   return this;
  },
  removeLink(position) {
    if (isNaN(+position) || this.chain[position] === undefined || position === '') {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let resultChain = this.chain.map(item => `( ${item} )`).join('~~');
    this.chain = [];
    return resultChain;
  }
};

module.exports = chainMaker;
