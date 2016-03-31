var getLayer = require('./getLayer');
var collectionToArray = require('./util/collectionToArray');
var getNonObjectValues = require('./util/getNonObjectValues');
var merge = require('xtend');
var convertTypes = require('./convertTypes');

module.exports = function getComposition(comp, items) {
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
      getLayer(layer, layers, items)
    );
  });

  convertTypes(rVal);

  return rVal;
};