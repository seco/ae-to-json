var getComposition = require('./getComposition');
var getFootage = require('./getFootage');
var collectionToArray = require('./util/collectionToArray');
var getNonObjectValues = require('./util/getNonObjectValues');
var convertTypes = require('./convertTypes');

module.exports = function getItems() {
  const IGNORE_PROPS = [
    'file'
  ];

  var getItems = function(target) {
    var rVal = [];
    var projectItems = collectionToArray(target.items);
    
    projectItems
    .forEach(function(item) {

      var itemJSON;

      // we only want to export compositions
      if(item instanceof CompItem) {
        itemJSON = getComposition(item);
      } else if(item instanceof FootageItem) {
        itemJSON = getFootage(item);
      } else {
        itemJSON = getNonObjectValues(item, IGNORE_PROPS);
      }

      // this item has items on itself
      if(item.items !== undefined) {
        itemJSON.items = getItems(item);
      }

      rVal.push(itemJSON);
    });

    convertTypes(rVal);

    return rVal;
  };

  return getItems(app.project);
};