var ae = require('after-effects');
var fs = require('fs');

var aeToJSON = require('../after-effects');

ae.options({
  errorHandling: true,
  es5Shim: true,
  aeQuery: true
});

module.exports = function(t) {
  ae.execute(aeToJSON)
  .then((json) => {
    t.ok(json, 'received json');
    t.equal(typeof json, 'object', 'received an object from');

    if(json) {
      fs.writeFileSync(
        'testOutPut.json',
        JSON.stringify(json, null, '  ')
      );
    }

    global.jsonFromAE = json;
    
    t.end();
  })
  .catch(function(err) {
    console.log(err);

    throw err;
  });
};