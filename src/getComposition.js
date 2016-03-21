const getLayer = require('./getLayer');
var collectionToArray = require('./util/collectionToArray');

module.exports = function getComposition(comp) {
  var rVal = {
    name: comp.name,
    duration: comp.duration,
    layers: []
  };

  var outLayers = rVal.layers;
  var layers = collectionToArray(comp.layers);

  // now loop through all layers to get keyframes
  layers.forEach(function(layer, layers) {

    // save out the layer
    outLayers.push(
      getLayer(layer)
    );
  });

  return rVal;
};