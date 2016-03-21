module.exports = function getFrameBlendingType(type) {
  switch(type) {
    case FrameBlendingType.FRAME_MIX:
      return 'FRAME_MIX';
  
    case FrameBlendingType.NO_FRAME_BLEND:
      return 'NO_FRAME_BLEND';
  
    case FrameBlendingType.PIXEL_MOTION:
      return 'PIXEL_MOTION';
    
    default: 
      return 'UNKNOWN';
  }
}