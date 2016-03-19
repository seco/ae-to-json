var ae = require('after-effects');

var aeToJSON = require('./aeToJSON');

ae.options({
  errorHandling: true,
  es5Shim: true,
  aeQuery: true
});

module.exports = function(t) {
  ae.execute(aeToJSON)
  .then((json) => {
    // console.log(json);

    t.ok(json, 'received json');
    t.equal(typeof json, 'object', 'received an object from');

    global.jsonFromAE = json;
    // console.log(JSON.stringify(json, null, '  '));
    
    t.end();
  })
  .catch(function(err) {
    console.log(err);

    throw err;
  });
};