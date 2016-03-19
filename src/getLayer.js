const getProperties = require('./getProperties');

module.exports = function getLayer(layer) {
  return {
    name: layer.name,
    properties: getProperties(layer)
  };
};