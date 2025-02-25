interface VMixFilterDesc_t {
    "FilterType": number;
    "FilterSlope": number;
    "Enabled": boolean;
    "FldbGain": number;
    "CutoffFreq": number;
    "Q": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixFilterDesc_t(ptr_or_class: string|AnySDKClass): VMixFilterDesc_t;