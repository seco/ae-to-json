var EXPECTED = getExpected();

module.exports = function(t) {
  var json = global.jsonFromAE;
  var compositions = json.compositions;

  compositions.forEach(function(comp) {
    var layers = comp.layers;

    layers.forEach(function(layer, i) {
      var key = comp.name + '_' + layer.name + '_' + i;

      for(var propName in layer.properties) {
        t.deepEqual(
          layer.properties[ propName ], 
          EXPECTED[ key ][ propName ], 
          comp.name + ' layer ' + layer.name + '_' + i + ' ' + propName + ' had the same value'
        );
      }
    });
  });

  t.end();
};



function getExpected() {
  return {
    "Test-Comp-Static_jam3Logo.png_0": {
      "anchorPoint": [
        [
          0,
          [
            250,
            250,
            0
          ]
        ]
      ],
      "position": [
        [
          0,
          [
            1200,
            1920,
            0
          ]
        ]
      ],
      "scale": [
        [
          0,
          [
            100,
            100,
            100
          ]
        ]
      ],
      "opacity": [
        [
          0,
          100
        ]
      ],
      "rotationX": [
        [
          0,
          0
        ]
      ],
      "rotationY": [
        [
          0,
          0
        ]
      ],
      "rotationZ": [
        [
          0,
          0
        ]
      ]
    },
    "Test-Comp-Animated_animatedLogo 2_0": {
      "anchorPoint": [
        [
          0,
          [
            250,
            250,
            0
          ]
        ]
      ],
      "position": [
        [
          8.44177510844177,
          [
            1200,
            1920,
            0
          ]
        ],
        [
          34.6012679346013,
          [
            1200,
            1920,
            0
          ]
        ],
        [
          84.2842842842843,
          [
            1200,
            2346,
            0
          ]
        ]
      ],
      "scale": [
        [
          0,
          [
            100,
            100,
            100
          ]
        ]
      ],
      "opacity": [
        [
          0,
          100
        ]
      ],
      "rotationX": [
        [
          0,
          34
        ]
      ],
      "rotationY": [
        [
          0,
          46
        ]
      ],
      "rotationZ": [
        [
          0,
          -4
        ]
      ]
    },
    "Test-Comp-Animated_animatedLogo_1": {
      "anchorPoint": [
        [
          0,
          [
            250,
            250,
            0
          ]
        ]
      ],
      "position": [
        [
          8.44177510844177,
          [
            1200,
            1920,
            0
          ]
        ],
        [
          84.2842842842843,
          [
            1200,
            2346,
            0
          ]
        ]
      ],
      "scale": [
        [
          0,
          [
            100,
            100,
            100
          ]
        ]
      ],
      "opacity": [
        [
          0,
          100
        ]
      ],
      "rotationX": [
        [
          0,
          34
        ]
      ],
      "rotationY": [
        [
          0,
          46
        ]
      ],
      "rotationZ": [
        [
          0,
          -4
        ]
      ]
    },
    "Test-Comp-Animated_staticLogo_2": {
      "anchorPoint": [
        [
          0,
          [
            250,
            250,
            0
          ]
        ]
      ],
      "position": [
        [
          0,
          [
            256,
            1948,
            0
          ]
        ]
      ],
      "scale": [
        [
          0,
          [
            100,
            100,
            100
          ]
        ]
      ],
      "opacity": [
        [
          0,
          100
        ]
      ],
      "rotationX": [
        [
          0,
          0
        ]
      ],
      "rotationY": [
        [
          0,
          0
        ]
      ],
      "rotationZ": [
        [
          0,
          0
        ]
      ]
    }
  };
}