interface PostProcessingTonemapParameters_t {
    "ExposureBias": number;
    "ShoulderStrength": number;
    "LinearStrength": number;
    "LinearAngle": number;
    "ToeStrength": number;
    "ToeNum": number;
    "ToeDenom": number;
    "WhitePoint": number;
    "LuminanceSource": number;
    "ExposureBiasShadows": number;
    "ExposureBiasHighlights": number;
    "MinShadowLum": number;
    "MaxShadowLum": number;
    "MinHighlightLum": number;
    "MaxHighlightLum": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PostProcessingTonemapParameters_t(ptr_or_class: string|AnySDKClass): PostProcessingTonemapParameters_t;