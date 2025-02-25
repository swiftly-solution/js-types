interface CVoiceContainerEnvelopeAnalyzer {
    "Mode": number;
    "Samples": number;
    "Threshold": number;
    readonly "Parent": CVoiceContainerAnalysisBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerEnvelopeAnalyzer(ptr_or_class: string|AnySDKClass): CVoiceContainerEnvelopeAnalyzer;