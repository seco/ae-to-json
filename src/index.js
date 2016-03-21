// require('ae-shim');

module.exports = function() {
  const getCompositions = require('./getCompositions');
  
  return {
    compositions: getCompositions()
  };
};