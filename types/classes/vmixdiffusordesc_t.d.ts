interface VMixDiffusorDesc_t {
    "Size": number;
    "Complexity": number;
    "Feedback": number;
    "OutputGain": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixDiffusorDesc_t(ptr_or_class: string|AnySDKClass): VMixDiffusorDesc_t;