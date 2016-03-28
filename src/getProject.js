var merge = require('xtend');
var getNonObjectValues = require('./util/getNonObjectValues');
var getItems = require('./getItems');
var convertTypes = require('./convertTypes');


module.exports = function getProject() {
  const IGNORE_PROPS = [
    'file',
    'xmpPacket'
  ];

  var rVal = merge(
    {},
    getNonObjectValues(app.project, IGNORE_PROPS),
    {
      items: getItems()
    }
  );

  convertTypes(rVal);

  return rVal;
};