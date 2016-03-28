var merge = require('xtend');

var getKeyframesForProp = require('./getKeyframesForProp');
var getNonObjectValues = require('./util/getNonObjectValues');
var convertTypes = require('./convertTypes');

// this function will export all properties for a layer
module.exports = function getProperties(layer) {

  // PropertyGroup

  var properties = {};

  var getProperties = function(layer, target) {
    getPropertyGroupArray(layer)
    .reduce(function(target, property) {
      var currentTarget =  {};
      var baseValues = getNonObjectValues(property);

      // now we want to check if this property is actually a 
      // property group
      if(property instanceof PropertyGroup) {
        getProperties(property, currentTarget);
      }

      currentTarget = merge(
        currentTarget,
        baseValues,
        {
          keyframes: getKeyframesForProp(property)
        }
      );

      // we want to remove name as it will be the objects variable name
      // delete currentTarget.name;
      convertTypes(currentTarget);

      target[ property.name ] = currentTarget;

      return target;
    }, target);
  };

  getProperties(layer, properties);

  return properties;
};

function getPropertyGroupArray(layer) {
  var rVal = [];

  for(var i = 1; i <= layer.numProperties; i++) {
    rVal.push(layer.property(i));
  }
  
  return rVal;
}