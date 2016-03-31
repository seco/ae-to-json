module.exports = function(type) {
  switch(type) {
    case PulldownPhase.OFF:
      return 'OFF';
    case PulldownPhase.WSSWW:
      return 'WSSWW';
    case PulldownPhase.SSWW:
      return 'SSWW';
    case PulldownPhase.SWWWS:
      return 'SWWWS';
    case PulldownPhase.WWWSS:
      return 'WWWSS';
    case PulldownPhase.WWSSW:
      return 'WWSSW';
    case PulldownPhase.WSSWW_24P_ADVANCE:
      return 'WSSWW_24P_ADVANCE';
    case PulldownPhase.SSWWW_24P_ADVANCE:
      return 'SSWWW_24P_ADVANCE';
    case PulldownPhase.SWWWS_24P_ADVANCE:
      return 'SWWWS_24P_ADVANCE';
    case PulldownPhase.WWWSS_24P_ADVANCE:
      return 'WWWSS_24P_ADVANCE';
    case PulldownPhase.WWSSW_24P_ADVANCE:
      return 'WWSSW_24P_ADVANCE';
    default:
      return 'UNKNOWN';
  }
};