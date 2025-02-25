interface VMixConvolutionDesc_t {
    "FldbGain": number;
    "PreDelayMS": number;
    "WetMix": number;
    "FldbLow": number;
    "FldbMid": number;
    "FldbHigh": number;
    "LowCutoffFreq": number;
    "HighCutoffFreq": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixConvolutionDesc_t(ptr_or_class: string|AnySDKClass): VMixConvolutionDesc_t;