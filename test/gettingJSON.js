var ae = require('after-effects');
var aeJSON = require('./..');
var fs = require('fs');
var path = require('path');

ae.options({
  errorHandling: true,
  es5Shim: true,
  aeQuery: true
});

module.exports = function(t) {
  ae.execute(aeJSON)
  .then((json) => {
    t.ok(json, 'received json');
    t.equal(typeof json, 'object', 'received an object from');

    global.jsonFromAE = json;
    // console.log(JSON.stringify(json, null, '  '));
    
    t.end();
  })
  .catch(function(err) {
    throw err;
  });
};