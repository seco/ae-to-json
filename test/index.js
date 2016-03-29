var tape = require('tape');

tape('gettingJSON', require('./gettingJSON'));
tape('compositions', require('./compositions'));
tape('layers', require('./layers'));
tape('property type', require('./propertyType'));
tape('property value type', require('./propertyValueType'));
tape('blending mode types', require('./blendModeTypes'));
tape('frame blending types', require('./frameBlendingTypes'));
tape('final comparison', require('./finalCompare'));
