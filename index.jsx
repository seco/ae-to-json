/* Shims */
require('./lib/shims/json');

/* This will create the global for jsx */
aeToJSON = require('./.');

aeToJSONFile = function(prompt) {
  prompt = prompt || '';

  var f = File.saveDialog(prompt);

  if(f) {
    f.open('w');
    
    f.write(JSON.stringify(aeToJSON(), null, '  '));
    
    f.close();
  }
};