var tape = require('tape');

tape('gettingJSON', require('./testGettingJSON.js'));
tape('file meta', require('./testFileMeta'));
tape('compositions', require('./testCompositions'));
tape('layers', require('./testLayers'));
tape('property type', require('./testPropertyType'));
tape('property value type', require('./testPropertyValueType'));
tape('blending mode types', require('./testBlendModeTypes'));
tape('frame blending types', require('./testFrameBlendingTypes'));
tape('final comparison', require('./testFinalValuesCompare'));
