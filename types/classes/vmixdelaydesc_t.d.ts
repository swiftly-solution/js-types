interface VMixDelayDesc_t {
    readonly "FeedbackFilter": VMixFilterDesc_t;
    "EnableFilter": boolean;
    "Delay": number;
    "DirectGain": number;
    "DelayGain": number;
    "FeedbackGain": number;
    "Width": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixDelayDesc_t(ptr_or_class: string|AnySDKClass): VMixDelayDesc_t;