interface VMixBoxverbDesc_t {
    "SizeMax": number;
    "SizeMin": number;
    "Complexity": number;
    "Diffusion": number;
    "ModDepth": number;
    "ModRate": number;
    "Parallel": boolean;
    readonly "FilterType": VMixFilterDesc_t;
    "Width": number;
    "Height": number;
    "Depth": number;
    "FeedbackScale": number;
    "FeedbackWidth": number;
    "FeedbackHeight": number;
    "FeedbackDepth": number;
    "OutputGain": number;
    "Taps": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixBoxverbDesc_t(ptr_or_class: string|AnySDKClass): VMixBoxverbDesc_t;