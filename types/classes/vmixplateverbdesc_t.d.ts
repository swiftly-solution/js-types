interface VMixPlateverbDesc_t {
    "Prefilter": number;
    "InputDiffusion1": number;
    "InputDiffusion2": number;
    "Decay": number;
    "Damp": number;
    "FeedbackDiffusion1": number;
    "FeedbackDiffusion2": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixPlateverbDesc_t(ptr_or_class: string|AnySDKClass): VMixPlateverbDesc_t;