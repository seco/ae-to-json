var merge = require('deep-extend');
var getNonObjectValues = require('./util/getNonObjectValues');
var convertTypes = require('./convertTypes');

module.exports = function(footageSource) {

  var rVal;

  if(footageSource instanceof FileSource) {

    rVal = merge(
      getNonObjectValues(footageSource),
      {
        file: footageSource.file.toString()
      }
    );
  } else if(footageSource instanceof SolidSource) {

    // this might need further parsing in the future
    rVal = getNonObjectValues(footageSource); 
  } else {

    rVal = getNonObjectValues(footageSource); 
  }

  convertTypes(rVal);

  return rVal;
};