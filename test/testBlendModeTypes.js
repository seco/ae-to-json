var getValuesFromTree = require('./getValuesFromTree');
var checkValueForPath = require('./checkValueForPath');

module.exports = function(t) {
  var json = global.jsonFromAE;
  var values = getValuesFromTree(global.jsonFromAE, 'blendingMode');
  var expectedValues = getExpectedValues();

  // console.log(JSON.stringify(values, null, '  '));

  Object.keys(expectedValues).forEach(function(path) {
    checkValueForPath(t, json, path, expectedValues[ path ]);
  });
  
  t.end();
};

function getExpectedValues() {
  return {
    "project|items|1|layers|0|blendingMode": "NORMAL",
    "project|items|1|layers|1|blendingMode": "NORMAL",
    "project|items|3|layers|0|blendingMode": "NORMAL",
    "project|items|3|layers|1|blendingMode": "NORMAL",
    "project|items|3|layers|2|blendingMode": "OVERLAY",
    "project|items|3|layers|3|blendingMode": "ADD"
  };
}