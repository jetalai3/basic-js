const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let sample = parseFloat(sampleActivity);
  if(!sampleActivity || typeof sampleActivity !== 'string' || isNaN(sample)) return false;
  if(sample === 0) return 0;
  let result = Math.ceil(Math.log(MODERN_ACTIVITY / sample)/ (0.693 / HALF_LIFE_PERIOD));
  return result >=0 ? result : false;;
};
