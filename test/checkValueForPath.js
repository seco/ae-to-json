module.exports = function(t, target, path, value) {
  var pathSplit = path.split('|');
  var key;

  for(var i = 0; i < pathSplit.length; i++) {
    key = pathSplit[ i ];

    if(i < pathSplit.length - 1) {
      if(!target[ key ]) {
        t.fail('Could not traverse the path: ' + path);
      }

      target = target[ key ];
    } else {
      t.equal(target[ key ], value, 'Value was correct for path' + path);
    }
  }
};