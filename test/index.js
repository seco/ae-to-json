var tape = require('tape');

tape('gettingJSON', require('./gettingJSON'));
tape('compositions', require('./compositions'));
tape('layers', require('./layers'));
tape('blending mode types', require('./blendModeTypes'));
tape('frame blending types', require('./frameBlendingTypes'));

// tape('properties', require('./properties'));
