var getValueFromLayers = require('./getValueFromLayers');

module.exports = function(t) {
  var values = getValueFromLayers('blendingMode');

  // console.log(JSON.stringify(values, null, '  '));
  t.deepEqual(values, getExpectedValue(), 'frame blending exports are correct');

  t.end();
};

function getExpectedValue() {
  return {
    "Test-Comp-Static": {
      "static-logo_0": {
        "blendingMode": "NORMAL"
      },
      "iAmANull_1": {
        "blendingMode": "NORMAL"
      }
    },
    "Test-Comp-Blank": {},
    "Test-Comp-Animated": {
      "animatedLogo 2_0": {
        "blendingMode": "NORMAL"
      },
      "animatedLogo_1": {
        "blendingMode": "NORMAL"
      },
      "animatedLogoBezier_2": {
        "blendingMode": "OVERLAY"
      },
      "staticLogo_3": {
        "blendingMode": "ADD"
      }
    }
  };
}