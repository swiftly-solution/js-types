interface VMixModDelayDesc_t {
    readonly "FeedbackFilter": VMixFilterDesc_t;
    "PhaseInvert": boolean;
    "GlideTime": number;
    "Delay": number;
    "OutputGain": number;
    "FeedbackGain": number;
    "ModRate": number;
    "ModDepth": number;
    "ApplyAntialiasing": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixModDelayDesc_t(ptr_or_class: string|AnySDKClass): VMixModDelayDesc_t;