module.exports = function getBlendingMode(type) {
  switch(type) {
    case BlendingMode.ADD:
        return 'ADD';

    case BlendingMode.ALPHA_ADD:
        return 'ALPHA_ADD';

    case BlendingMode.CLASSIC_COLOR_BURN:
        return 'CLASSIC_COLOR_BURN';

    case BlendingMode.CLASSIC_COLOR_DODGE:
        return 'CLASSIC_COLOR_DODGE';

    case BlendingMode.CLASSIC_DIFFERENCE:
        return 'CLASSIC_DIFFERENCE';

    case BlendingMode.COLOR:
        return 'COLOR';

    case BlendingMode.COLOR_BURN:
        return 'COLOR_BURN';

    case BlendingMode.COLOR_DODGE:
        return 'COLOR_DODGE';

    case BlendingMode.DANCING_DISSOLVE:
        return 'DANCING_DISSOLVE';

    case BlendingMode.DARKEN:
        return 'DARKEN';

    case BlendingMode.DARKER_COLOR:
        return 'DARKER_COLOR';

    case BlendingMode.DIFFERENCE:
        return 'DIFFERENCE';

    case BlendingMode.DISSOLVE:
        return 'DISSOLVE';

    case BlendingMode.EXCLUSION:
        return 'EXCLUSION';

    case BlendingMode.HARD_LIGHT:
        return 'HARD_LIGHT';

    case BlendingMode.HARD_MIX:
        return 'HARD_MIX';

    case BlendingMode.HUE:
        return 'HUE';

    case BlendingMode.LIGHTEN:
        return 'LIGHTEN';

    case BlendingMode.LIGHTER_COLOR:
        return 'LIGHTER_COLOR';

    case BlendingMode.LINEAR_BURN:
        return 'LINEAR_BURN';

    case BlendingMode.LINEAR_DODGE:
        return 'LINEAR_DODGE';

    case BlendingMode.LINEAR_LIGHT:
        return 'LINEAR_LIGHT';

    case BlendingMode.LUMINESCENT_PREMUL:
        return 'LUMINESCENT_PREMUL';

    case BlendingMode.LUMINOSITY:
        return 'LUMINOSITY';

    case BlendingMode.MULTIPLY:
        return 'MULTIPLY';

    case BlendingMode.NORMAL:
        return 'NORMAL';

    case BlendingMode.OVERLAY:
        return 'OVERLAY';

    case BlendingMode.PIN_LIGHT:
        return 'PIN_LIGHT';

    case BlendingMode.SATURATION:
        return 'SATURATION';

    case BlendingMode.SCREEN:
        return 'SCREEN';

    case BlendingMode.SILHOUETE_ALPHA:
        return 'SILHOUETE_ALPHA';

    case BlendingMode.SILHOUETTE_LUMA:
        return 'SILHOUETTE_LUMA';

    case BlendingMode.SOFT_LIGHT:
        return 'SOFT_LIGHT';

    case BlendingMode.STENCIL_ALPHA:
        return 'STENCIL_ALPHA';

    case BlendingMode.STENCIL_LUMA:
        return 'STENCIL_LUMA';

    case BlendingMode.VIVID_LIGHT:
        return 'VIVID_LIGHT';

    default:
      return 'UNKNOWN';
  }
};