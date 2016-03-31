module.exports = function(type) {
  switch(type) {
    case FieldSeparationType.OFF:
      return 'OFF';

    case FieldSeparationType.UPPER_FIELD_FIRST:
      return 'UPPER_FIELD_FIRST';

    case FieldSeparationType.LOWER_FIELD_FIRST:
      return 'LOWER_FIELD_FIRST';

    default:
      return 'UNKNOWN';
  }
};