const getKeyframesForProp = require('./getKeyframesForProp');

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

    properties[ propOutName ] = getKeyframesForProp(
      layer.property(property)
    );

    return properties;
  }, {});
};