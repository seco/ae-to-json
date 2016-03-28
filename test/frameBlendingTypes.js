var getValueFromLayers = require('./getValueFromLayers');

module.exports = function(t) {
  var values = getValueFromLayers('frameBlendingType');

  t.deepEqual(values, getExpectedValue(), 'frame blending exports are correct');

  t.end();
};

function getExpectedValue() {
  return {
    "Test-Comp-Static": {
      "static-logo_0": {
        "frameBlendingType": "NO_FRAME_BLEND"
      },
      "iAmANull_1": {
        "frameBlendingType": "NO_FRAME_BLEND"
      }
    },
    "Test-Comp-Blank": {},
    "Test-Comp-Animated": {
      "animatedLogo 2_0": {
        "frameBlendingType": "NO_FRAME_BLEND"
      },
      "animatedLogo_1": {
        "frameBlendingType": "NO_FRAME_BLEND"
      },
      "animatedLogoBezier_2": {
        "frameBlendingType": "NO_FRAME_BLEND"
      },
      "staticLogo_3": {
        "frameBlendingType": "NO_FRAME_BLEND"
      }
    }
  };
}