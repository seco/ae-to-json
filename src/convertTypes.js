var varibleToParser = {
  propertyType: require('./getPropertyType'),
  propertyValueType: require('./getPropertyValueType'),
  blendingMode: require('./getBlendingMode'),
  frameBlendingType: require('./getFrameBlendingType'),
  alphaMode: require('./getAlphaMode'),
  fieldSeparationType: require('./getFieldSeparationType'),
  removePulldown: require('./getRemovePullDownType')
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