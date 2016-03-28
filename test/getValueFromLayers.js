module.exports = function(varName) {
  var rVal = {};

  var json = global.jsonFromAE;
  var compositions = json.project.items.filter(function(item) {
    return item.typeName === 'Composition';
  });

  compositions
  .forEach(function(comp) {
    var layers = comp.layers;
    
    rVal[ comp.name ] = rVal[ comp.name ] || {};

    layers.forEach(function(layer, i) {
      rVal[ comp.name ][ layer.name + '_' + i ] = rVal[ comp.name ][ layer.name + '_' + i ] || {};

      rVal[ comp.name ][ layer.name + '_' + i ][ varName ] = layer[ varName ];
    });
  });

  return rVal;
};