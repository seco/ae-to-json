module.exports = function() {
  const PROPS = [
    'anchorPoint', 
    'position',
    'scale',
    'opacity',
    'rotation'
  ];

  return {
    compositions: getCompositions()
  };
  
  /***************************************************************/
  /******** The following functions need to be scoped ************/ 
  /******** inside of this function to ensure they can be ********/ 
  /******** run by require('after-effects') **********************/
  /***************************************************************/
  function getCompositions() {
    var rVal = [];
    var compositions = get(CompItem);
    
    // loop through all compositions in the project
    compositions.each(function(comp) {
      rVal.push(getComposition(comp));
    });

    return rVal; 
  }

  function getComposition(comp) {
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
  }

  function getLayer(layer) {
    return {
      name: layer.name,
      properties: getProperties(layer)
    };
  }

  // this function will export all properties for a layer
  function getProperties(layer) {
    return PROPS
    .reduce(function(properties, property) {
      properties[ property ] = getKeyFramesForProp(
        layer.property(property)
      );

      return properties;
    }, {});
  }
  
  // this function will export keyframes for a property
  function getKeyFramesForProp(prop) {
    var rVal = [];

    // we have keyframes add all keyframes
    if(prop.numKeys > 0) {

      for(var i = 1; i <= prop.numKeys; i++) {
        rVal.push(
          [ prop.keyTime( i ), prop.keyValue( i ) ]
        );
      }
    // we do not have keyframes just add the first
    } else {

      rVal.push(
        [ 0, prop.valueAtTime(0, false) ]
      );
    }

    return rVal;
  }
};