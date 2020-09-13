const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(reverse) {
    this.reverse = reverse;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error();

    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let messageArray = message.toUpperCase().split('');
    let keyArray = key.toUpperCase().split('');
    let result = [];
    let j = 0;

    for (let i = 0; i < messageArray.length; i++) {
      if(letters.indexOf(messageArray[i]) === -1) {
        result.push(messageArray[i]);
        continue;
      }

      let sum = letters.indexOf(messageArray[i]) + letters.indexOf(keyArray[j]);
      let finIndex = -1;
      
      if (letters.length - 1 - sum < 0) {
        finIndex = Math.abs(letters.length - 1 - sum) - 1;
      } else {
        finIndex = sum;
      }
      
      result.push(letters[finIndex]);
      
      j++;
      if (j === keyArray.length) j = 0;
    }

    return (this.reverse === false) ? result.reverse().join('') : result.join('');
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error();
    
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let messageArray = message.toUpperCase().split('');
    let keyArray = key.toUpperCase().split('');
    let result = [];
    let j = 0;

    for (let i = 0; i < messageArray.length; i++) {
      if(letters.indexOf(messageArray[i]) === -1) {
        result.push(messageArray[i]);
        continue;
      }

      let messageIndex = letters.indexOf(messageArray[i]);
      let keyIndex = letters.indexOf(keyArray[j]);
    
      let finIndex = 1 + (messageIndex > keyIndex) ? messageIndex - keyIndex : keyIndex - messageIndex;
      if(finIndex < 0) {
        finIndex = letters.length + finIndex;
      }
      
      result.push(letters[finIndex]);
      
      j++;
      if (j === keyArray.length) j = 0;
    }

    return (this.reverse === false) ? result.reverse().join('') : result.join('');
  }
}

module.exports = VigenereCipheringMachine;
