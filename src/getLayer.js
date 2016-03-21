var getProperties = require('./getProperties');
var merge = require('xtend');
var getNonObjectValues = require('./util/getNonObjectValues');

module.exports = function getLayer(layer, parentLayers) {
  var baseValues = getNonObjectValues(layer);
  var parent = layer.parent;

  if(parent) {
    parent = parentLayers.indexOf(parent);
  }

  return merge(
    baseValues,
    {
      parent: parent,
      properties: getProperties(layer),
      nullLayer: Boolean(baseValues.nullLayer) // this is here to normalize cause sometimes it might be undefined or false
    }
  );
};