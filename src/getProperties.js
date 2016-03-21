var getKeyframesForProp = require('./getKeyframesForProp');
var merge = require('xtend');
var getNonObjectValues = require('./util/getNonObjectValues');

const PROPS = [
  'anchorPoint', 
  'position',
  'scale',
  'opacity',
  'rotationX',
  'rotationY',
  'rotation'
];

const PROP_RENAMES = {
  rotation: 'rotationZ'
};

// this function will export all properties for a layer
module.exports = function getProperties(layer) {
  return PROPS
  .reduce(function(properties, property) {
    var propOutName = PROP_RENAMES[ property ] || property;
    var aeProperty = layer.property(property);
    var baseValues = getNonObjectValues(aeProperty);

    properties[ propOutName ] = merge(
      baseValues,
      {
        keyframes: getKeyframesForProp(
          aeProperty
        )
      }
    );

    return properties;
  }, {});
};