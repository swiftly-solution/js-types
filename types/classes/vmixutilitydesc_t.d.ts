interface VMixUtilityDesc_t {
    "Op": number;
    "InputPan": number;
    "OutputBalance": number;
    "FldbOutputGain": number;
    "BassMono": boolean;
    "BassFreq": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixUtilityDesc_t(ptr_or_class: string|AnySDKClass): VMixUtilityDesc_t;