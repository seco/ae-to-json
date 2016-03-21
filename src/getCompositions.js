const getComposition = require('./getComposition');
const collectionToArray = require('./util/collectionToArray');

module.exports = function getCompositions() {
  var rVal = [];
  var projectItems = collectionToArray(app.project.items);
  
  projectItems
  .forEach(function(item) {

    // we only want to export compositions
    if(item instanceof CompItem) {
      rVal.push(getComposition(item));
    }
  });

  return rVal;
};