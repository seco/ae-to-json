var EXPECTED_NAMES = {
  "Test-Comp-Static": [ 'static-logo', 'iAmANull' ],
  "Test-Comp-Blank": [],
  "Test-Comp-Animated": [ 'animatedLogo 2', 'animatedLogo', 'animatedLogoBezier', 'staticLogo' ]
};

var TESTS_FOR_LAYER = {
  "iAmANull": function(t, comp, layer) {
    // check if null layer is true
    t.equal(layer.isNullLayer, true, 'isNullLayer' + comp.name + ' layer ' + layer.name);
  },

  "static-logo": function(t, comp, layer) {
    t.equal(layer.parent, 1, 'static-logo\'s parent is set correctly');
  }
};

module.exports = function(t) {
  var json = global.jsonFromAE;
  var compositions = json.compositions;

  compositions
  .forEach(function(comp) {

    var layers = comp.layers;
    var names = [];

    t.equal(
      comp.layers.length, 
      EXPECTED_NAMES[ comp.name ].length, 
      comp.name + ' had ' + EXPECTED_NAMES[ comp.name ].length + ' layers'
    );

    // if we have layers we want to make sure all layers
    // have all expected props
    layers.forEach(function(layer, i) {

      t.ok(layer.name, 'composition ' + comp.name + ' layer ' + i + ' has a name');
      t.ok(layer.properties, 'composition ' + comp.name + ' layer ' + layer.name + ' has properties');
      t.ok(layer.isNullLayer !== undefined, 'composition ' + comp.name + ' layer ' + layer.name + ' has isNullLayer');

      // run tests for specific layers
      if(TESTS_FOR_LAYER[ layer.name ]) {
        TESTS_FOR_LAYER[ layer.name ](t, comp, layer);

      // run test for every other layer
      } else {

        t.equal(layer.isNullLayer, false, 'isNullLayer value was correct for ' + comp.name + ' layer ' + layer.name);
        t.equal(layer.parent, null, 'parent was set to null for ' + comp.name + ' layer ' + layer.name);
      }

      names.push(layer.name);
    });

    t.deepEqual(names, EXPECTED_NAMES[ comp.name ], comp.name + ' received expected names');
  });

  t.end();
};