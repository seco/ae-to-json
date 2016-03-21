const getProperties = require('./getProperties');

module.exports = function getLayer(layer, parentLayers) {
  
  var parent = layer.parent;

  if(parent) {
    parent = parentLayers.indexOf(parent);
  }

  return {
    name: layer.name,
    isNullLayer: layer.nullLayer,
    parent: parent,
    properties: getProperties(layer)
  };
};