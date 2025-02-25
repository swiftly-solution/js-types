interface VMixShaperDesc_t {
    "Shape": number;
    "FldbDrive": number;
    "FldbOutputGain": number;
    "WetMix": number;
    "OversampleFactor": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixShaperDesc_t(ptr_or_class: string|AnySDKClass): VMixShaperDesc_t;