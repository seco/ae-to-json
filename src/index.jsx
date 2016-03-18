/* Shims */
require('./shims/json');

/* This will create the global for jsx */
global.aeToJSON = require('./index.js');

global.aeToJSONFile = function(prompt) {
  prompt = prompt || '';

  var f = File.saveDialog(prompt);

  if(f) {
    f.open('w');
    
    f.write(JSON.stringify(aeToJSON(), null, '  '));
    
    f.close();
  }
};