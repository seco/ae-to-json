module.exports = function() {
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

  const EASE_TYPE = {
    BEZIER: 'bezier',
    LINEAR: 'linear',
    HOLD: 'hold'
  };

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
      var propOutName = PROP_RENAMES[ property ] || property;

      properties[ propOutName ] = getKeyFramesForProp(
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
          [ prop.keyTime(i), prop.keyValue(i), getEaseForKeyFrame(prop, i) ]
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

  // get the key ease info for the key frame
  function getEaseForKeyFrame(prop, idxKeyFrame) {
    var rVal = {
      easeIn: {
        type: getEaseType(prop.keyInInterpolationType(idxKeyFrame)),
        temporalEase: getTemporalEaseIn(prop, idxKeyFrame)
      }, 

      easeOut: {
        type: getEaseType(prop.keyOutInterpolationType(idxKeyFrame)),
        temporalEase: getTemporalEaseOut(prop, idxKeyFrame)
      }
    };

    if(prop.isSpatial) {
      rVal.easeIn.spatialTangent = getSpatialTangentIn(prop, idxKeyFrame);
      rVal.easeOut.spatialTangent = getSpatialTangentOut(prop, idxKeyFrame);
    }

    return rVal;
  }

  // get ease type
  function getEaseType(type){
    switch(type) {
      case KeyframeInterpolationType.BEZIER:
        return EASE_TYPE.BEZIER;
      break;

      case KeyframeInterpolationType.LINEAR:
        return EASE_TYPE.LINEAR;
      break;

      case KeyframeInterpolationType.HOLD:
        return EASE_TYPE.HOLD;
      break;

      default:
        throw new Error('unknown ease type');
      break;
    }
  }

  // gets temporal ease in
  function getTemporalEaseIn(prop, idxKeyFrame) {
    return getTemporalEase('keyInTemporalEase', prop, idxKeyFrame);
  }

  // gets temporal ease out
  function getTemporalEaseOut(prop, idxKeyFrame) {
    return getTemporalEase('keyOutTemporalEase', prop, idxKeyFrame);
  }

  function getTemporalEase(func, prop, idxKeyFrame) {
    var type = prop.propertyValueType;
    var rVal = prop[ func ](idxKeyFrame)
    .map(function(easeInfo) {
      return {
        speed: easeInfo.speed,
        influence: easeInfo.influence
      };
    });

    return rVal;
  }


  // get in spatial tangent
  function getSpatialTangentIn(prop, idxKeyFrame) {
    return getSpatialTangent('keyInSpatialTangent', prop, idxKeyFrame);
  }

  // get out spatial tangent
  function getSpatialTangentOut(prop, idxKeyFrame) {
    return getSpatialTangent('keyOutSpatialTangent', prop, idxKeyFrame);
  }

  function getSpatialTangent(func, prop, idxKeyFrame) {
    if(prop.isSpatial) {
      return prop[ func ](idxKeyFrame);
    } else {
      throw new Error('this function should not be called if prop.isSpatial is false');
    }
  }
};