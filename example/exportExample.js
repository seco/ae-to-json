/*********************************************/
/*********************************************/
/* THIS SCRIPT WILL EXPORT AN EXAMPLE OUTPUT */
/*********************************************/
/*********************************************/

var fs = require('fs');
var path = require('path');
var afterEffects = require('after-effects');

var aeToJSON = require('../test/aeToJSON');

afterEffects.options({
  errorHandling: true,
  es5Shim: true,
  aeQuery: true
});

afterEffects.execute(aeToJSON)
.then((json) => {
  var pathOut = path.join(__dirname, 'example.json');

  if(json) {
    fs.writeFileSync(
      pathOut,
      JSON.stringify(json, null, '  ')
    );

    console.log('EXAMPLE FILE WRITTEN TO', pathOut);
  } else {
    throw new Error('no json output from After Effects');
  }
})
.catch((e) => {
  throw e;
});
