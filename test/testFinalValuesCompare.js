var example = require('../example/example');
var deepEqual = require('deep-equal');
var diff = require('big-object-diff');
var chalk = require('chalk');

module.exports = function(t) {
  var json = global.jsonFromAE;
  var expected = example;

  // we'll test .project
  // since many values change at the root
  var areEqual = deepEqual(json.project, example.project);

  t.ok(areEqual, 'json out matched example');

  t.end();

  if(!areEqual) {

    var out = diff.renderDiff(expected.project, json.project)
    .split(/(\/\/ +.*\n)/)
    .map(function(line) {
      if(line[ 0 ] == '/' && line[ 1 ] == '/') {
        return chalk.red(line);
      } else {
        return line;
      }
    })
    .join('');

    console.log(out);
  }
};

function clone(target) {
  return JSON.parse(JSON.stringify(target));
}