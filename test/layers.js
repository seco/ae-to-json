var EXPECTED_NAMES = {
  "Test-Comp-Static": [ 'jam3Logo.png', 'iAmANull' ],
  "Test-Comp-Blank": [],
  "Test-Comp-Animated": [ 'animatedLogo 2', 'animatedLogo', 'animatedLogoBezier', 'staticLogo' ]
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

      // want to check that isNullLayer is being exported properly
      if(layer.name === 'iAmANull') {
        t.ok(layer.isNullLayer === true, 'isNullLayer' + comp.name + ' layer ' + layer.name);        
      } else {
        t.ok(layer.isNullLayer === false, 'isNullLayer value was correct for ' + comp.name + ' layer ' + layer.name);        
      }

      names.push(layer.name);
    });

    t.deepEqual(names, EXPECTED_NAMES[ comp.name ], comp.name + ' received expected names');
  });

  t.end();
};