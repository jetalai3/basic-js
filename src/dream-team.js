const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members || !members.length) return false;
  members = members.map(current => typeof current === 'string' ? current.trim() : current);
  return members.reduce(function(result, current) {
    if(typeof current === 'string') result.push(current.split('')[0].toUpperCase());
    return result;
  }, new Array).sort().join('');
};
