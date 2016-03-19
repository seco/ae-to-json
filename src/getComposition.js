const getLayer = require('./getLayer');

module.exports = function getComposition(comp) {
  var rVal = {
    name: comp.name,
    duration: comp.duration,
    layers: []
  };

  var outLayers = rVal.layers;
  var layers = get(AVLayer, comp.layers);

  // now loop through all layers to get keyframes
  layers.each(function(layer) {

    // save out the layer
    outLayers.push(
      getLayer(layer)
    );
  });

  return rVal;
};