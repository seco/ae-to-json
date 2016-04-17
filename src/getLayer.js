var merge = require('xtend');

var getProperties = require('./getProperties');
var getNonObjectValues = require('./util/getNonObjectValues');
var convertTypes = require('./convertTypes');
var getFootageSource = require('./getFootageSource');

module.exports = function getLayer(layer, parentLayers, items) {
  var baseValues = getNonObjectValues(layer);
  var parent = layer.parent;
  var rVal;

  if(parent) {
    parent = parentLayers.indexOf(parent);
  }

  rVal = merge(
    baseValues,
    {
      parent: parent,
      properties: getProperties(layer),
      nullLayer: Boolean(baseValues.nullLayer) // this is here to normalize cause sometimes it might be undefined or false
    }
  );

  // light layers and cameras etc wont have a source
  if(layer.source) {
    rVal.source = layer.source.file && layer.source.file.toString();
  }

  convertTypes(rVal);

  return rVal;
};