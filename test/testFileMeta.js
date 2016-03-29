module.exports = function(t) {
  var json = global.jsonFromAE;

  t.ok(json.buildName, 'build name existed');
  t.ok(json.buildNumber, 'build number existed');
  t.ok(json.isoLanguage, 'has language');
  t.ok(json.version, 'has version');
  t.end();
};