module.exports = function getPropertyType(type) {
  switch(type) {
    case PropertyType.PROPERTY:
      return 'PROPERTY';

    case PropertyType.INDEXED_GROUP:
      return 'INDEXED_GROUP';

    case PropertyType.NAMED_GROUP:
      return 'NAMED_GROUP';
      
    default:
      return 'UNKNOWN';
  }
};