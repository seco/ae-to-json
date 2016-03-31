module.exports = function(type) {
  switch(type) {
    case AlphaMode.IGNORE:
      return 'IGNORE';
    case AlphaMode.STRAIGHT:
      return 'STRAIGHT';
    case AlphaMode.PREMULTIPLIED:
      return 'PREMULTIPLIED';
    default:
      return 'UNKNOWN';
  }
};