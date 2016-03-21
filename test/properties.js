var EXPECTED = getExpected();

module.exports = function(t) {
  var json = global.jsonFromAE;
  var compositions = json.compositions;

  compositions.forEach(function(comp) {
    var layers = comp.layers;

    layers.forEach(function(layer, i) {
      var key = comp.name + '_' + layer.name + '_' + i;

      if(EXPECTED[ key ]) {
        for(var propName in layer.properties) {

          if(EXPECTED[ key ][ propName ]) {
            t.deepEqual(
              layer.properties[ propName ], 
              EXPECTED[ key ][ propName ], 
              comp.name + ' layer ' + layer.name + '_' + i + ' ' + propName + ' had the same value'
            );
          }
        }
      }
    });
  });

  t.end();
};



function getExpected() {
  return {
    "Test-Comp-Static_static-logo": {
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
          ],
          {
            "easeIn": {
              "type": "linear",
              "temporalEase": [
                {
                  "speed": 0,
                  "influence": 16.666666667
                }
              ],
              "spatialTangent": [
                0,
                0,
                0
              ]
            },
            "easeOut": {
              "type": "linear",
              "temporalEase": [
                {
                  "speed": 0,
                  "influence": 16.666666667
                }
              ],
              "spatialTangent": [
                0,
                0,
                0
              ]
            }
          }
        ],
        [
          34.6012679346013,
          [
            1200,
            1920,
            0
          ],
          {
            "easeIn": {
              "type": "linear",
              "temporalEase": [
                {
                  "speed": 0,
                  "influence": 16.666666667
                }
              ],
              "spatialTangent": [
                0,
                0,
                0
              ]
            },
            "easeOut": {
              "type": "linear",
              "temporalEase": [
                {
                  "speed": 8.57435862995299,
                  "influence": 16.666666667
                }
              ],
              "spatialTangent": [
                0,
                46.5107803344727,
                0
              ]
            }
          }
        ],
        [
          84.2842842842843,
          [
            1200,
            2346,
            0
          ],
          {
            "easeIn": {
              "type": "linear",
              "temporalEase": [
                {
                  "speed": 8.57435862995299,
                  "influence": 16.666666667
                }
              ],
              "spatialTangent": [
                0,
                -46.5107803344727,
                0
              ]
            },
            "easeOut": {
              "type": "linear",
              "temporalEase": [
                {
                  "speed": 0,
                  "influence": 16.666666667
                }
              ],
              "spatialTangent": [
                0,
                0,
                0
              ]
            }
          }
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
          100,
          {
            "easeIn": {
              "type": "linear",
              "temporalEase": [
                {
                  "speed": 0,
                  "influence": 16.666666667
                }
              ]
            },
            "easeOut": {
              "type": "linear",
              "temporalEase": [
                {
                  "speed": -1.03594884203249,
                  "influence": 16.666666667
                }
              ]
            }
          }
        ],
        [
          96.5298631965299,
          0,
          {
            "easeIn": {
              "type": "linear",
              "temporalEase": [
                {
                  "speed": -1.03594884203249,
                  "influence": 16.666666667
                }
              ]
            },
            "easeOut": {
              "type": "linear",
              "temporalEase": [
                {
                  "speed": 0,
                  "influence": 16.666666667
                }
              ]
            }
          }
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
          ],
          {
            "easeIn": {
              "type": "linear",
              "temporalEase": [
                {
                  "speed": 0,
                  "influence": 16.666666667
                }
              ],
              "spatialTangent": [
                0,
                -71,
                0
              ]
            },
            "easeOut": {
              "type": "linear",
              "temporalEase": [
                {
                  "speed": 5.61690277166739,
                  "influence": 16.666666667
                }
              ],
              "spatialTangent": [
                0,
                71,
                0
              ]
            }
          }
        ],
        [
          84.2842842842843,
          [
            1200,
            2346,
            0
          ],
          {
            "easeIn": {
              "type": "linear",
              "temporalEase": [
                {
                  "speed": 5.61690277166739,
                  "influence": 16.666666667
                }
              ],
              "spatialTangent": [
                0,
                -71,
                0
              ]
            },
            "easeOut": {
              "type": "linear",
              "temporalEase": [
                {
                  "speed": 0,
                  "influence": 16.666666667
                }
              ],
              "spatialTangent": [
                0,
                71,
                0
              ]
            }
          }
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
    },
    "Test-Comp-Animated_animatedLogoBezier_2": {
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
          ],
          {
            "easeIn": {
              "type": "linear",
              "temporalEase": [
                {
                  "speed": 0,
                  "influence": 16.666666667
                }
              ],
              "spatialTangent": [
                0,
                -71,
                0
              ]
            },
            "easeOut": {
              "type": "linear",
              "temporalEase": [
                {
                  "speed": 30.5525846882257,
                  "influence": 16.666666667
                }
              ],
              "spatialTangent": [
                0,
                34.6377944946289,
                0
              ]
            }
          }
        ],
        [
          45.2118785452119,
          [
            1704.17801874055,
            1645.56064015018,
            -954.177061094476
          ],
          {
            "easeIn": {
              "type": "bezier",
              "temporalEase": [
                {
                  "speed": 31.8341262537217,
                  "influence": 16.666666667
                }
              ],
              "spatialTangent": [
                0,
                -71,
                0
              ]
            },
            "easeOut": {
              "type": "bezier",
              "temporalEase": [
                {
                  "speed": 31.8341262537217,
                  "influence": 26.3261116176607
                }
              ],
              "spatialTangent": [
                0,
                3.4916205406189,
                0
              ]
            }
          }
        ],
        [
          55.8558558558559,
          [
            1587.27796637104,
            1806.74867938474,
            222.754193566184
          ],
          {
            "easeIn": {
              "type": "bezier",
              "temporalEase": [
                {
                  "speed": 32.8049415267424,
                  "influence": 38.7475352828698
                }
              ],
              "spatialTangent": [
                67.6812591552734,
                -90.99951171875,
                -128.089492797852
              ]
            },
            "easeOut": {
              "type": "bezier",
              "temporalEase": [
                {
                  "speed": 32.8049415267424,
                  "influence": 36.3243926412931
                }
              ],
              "spatialTangent": [
                -148.936920166016,
                200.250228881836,
                281.869079589844
              ]
            }
          }
        ],
        [
          84.2842842842843,
          [
            1200,
            2346,
            0
          ],
          {
            "easeIn": {
              "type": "linear",
              "temporalEase": [
                {
                  "speed": 27.9231623368901,
                  "influence": 16.666666667
                }
              ],
              "spatialTangent": [
                0,
                -21.0659446716309,
                0
              ]
            },
            "easeOut": {
              "type": "linear",
              "temporalEase": [
                {
                  "speed": 0,
                  "influence": 16.666666667
                }
              ],
              "spatialTangent": [
                0,
                71,
                0
              ]
            }
          }
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
    "Test-Comp-Animated_staticLogo_3": {
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