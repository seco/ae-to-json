var merge = require('deep-extend');
var getFootageSource = require('./getFootageSource');
var getNonObjectValues = require('./util/getNonObjectValues');

module.exports = function(footage) {
  const IGNORE_PROPS = [
    'file'
  ];

  var rVal = merge(
    getNonObjectValues(footage, IGNORE_PROPS),
    {
      // in the documentation it is stated that if footage.mainSource is a FileSource
      // this value is null
      file: null,  
      mainSource: getFootageSource(footage.mainSource)
    }
  );

  // check if this is a FileSource
  // if(footage.mainSource instanceof FileSource) {
  //   rVal.file = merge({}, rVal.mainSource.file);
  // }

  return rVal;
};