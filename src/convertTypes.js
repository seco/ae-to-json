var varibleToParser = {
  propertyType: require('./getPropertyType'),
  propertyValueType: require('./getPropertyValueType'),
  blendingMode: require('./getBlendingMode'),
  frameBlendingType: require('./getFrameBlendingType')
};

module.exports = function(item) {
  if(item) {
    for(var key in varibleToParser) {
      if(item[ key ]) {
        item[ key ] = varibleToParser[ key ](item[ key ]);
      }
    }
  }
};