const getLayer = require('./getLayer');
var collectionToArray = require('./util/collectionToArray');
var getNonObjectValues = require('./util/getNonObjectValues');
var merge = require('xtend');

module.exports = function getComposition(comp) {
  var rVal = merge(
    getNonObjectValues(comp),
    {
      layers: []
    }
  );

  var outLayers = rVal.layers;
  var layers = collectionToArray(comp.layers);

  // now loop through all layers to get keyframes
  layers.forEach(function(layer) {

    // save out the layer
    outLayers.push(
      getLayer(layer, layers)
    );
  });

  return rVal;
};