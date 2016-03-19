const getComposition = require('./getComposition');

module.exports = function getCompositions() {
  var rVal = [];
  var compositions = get(CompItem);
  
  // loop through all compositions in the project
  compositions.each(function(comp) {
    rVal.push(getComposition(comp));
  });

  return rVal; 
};