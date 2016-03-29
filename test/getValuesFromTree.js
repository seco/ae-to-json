var traverse = require('traverse');

module.exports = function(root, variableName) {
  var rVal = {};

  traverse(root).forEach(function(value) {
    if(this.key === variableName) {
      rVal[ this.path.join('|') ] = value;
    }
  });

  return rVal;
};