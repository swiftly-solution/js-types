interface PostProcessingResource_t {
    "HasTonemapParams": boolean;
    readonly "ToneMapParams": PostProcessingTonemapParameters_t;
    "HasBloomParams": boolean;
    readonly "BloomParams": PostProcessingBloomParameters_t;
    "HasVignetteParams": boolean;
    readonly "VignetteParams": PostProcessingVignetteParameters_t;
    "HasLocalContrastParams": boolean;
    readonly "LocalConstrastParams": PostProcessingLocalContrastParameters_t;
    "ColorCorrectionVolumeDim": number;
    "HasColorCorrection": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PostProcessingResource_t(ptr_or_class: string|AnySDKClass): PostProcessingResource_t;