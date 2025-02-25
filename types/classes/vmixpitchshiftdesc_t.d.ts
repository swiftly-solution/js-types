interface VMixPitchShiftDesc_t {
    "GrainSampleCount": number;
    "PitchShift": number;
    "Quality": number;
    "ProcType": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VMixPitchShiftDesc_t(ptr_or_class: string|AnySDKClass): VMixPitchShiftDesc_t;