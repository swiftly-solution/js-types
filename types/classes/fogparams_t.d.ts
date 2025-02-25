interface fogparams_t {
    "DirPrimary": Vector;
    "ColorPrimary": Color;
    "ColorSecondary": Color;
    "ColorPrimaryLerpTo": Color;
    "ColorSecondaryLerpTo": Color;
    "Start": number;
    "End": number;
    "Farz": number;
    "Maxdensity": number;
    "Exponent": number;
    "HDRColorScale": number;
    "SkyboxFogFactor": number;
    "SkyboxFogFactorLerpTo": number;
    "StartLerpTo": number;
    "EndLerpTo": number;
    "MaxdensityLerpTo": number;
    "Lerptime": number;
    "Duration": number;
    "Blendtobackground": number;
    "Scattering": number;
    "Locallightscale": number;
    "Enable": boolean;
    "Blend": boolean;
    "NoReflectionFog": boolean;
    "Padding": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function fogparams_t(ptr_or_class: string|AnySDKClass): fogparams_t;