var merge = require('xtend');
var getNonObjectValues = require('./util/getNonObjectValues');
var getProject = require('./getProject');
var convertTypes = require('./convertTypes');

module.exports = function() {
  var rVal = merge(
    {},
    getNonObjectValues(app),
    {
      project: getProject()
    }
  );

  convertTypes(rVal);

  return rVal;
};