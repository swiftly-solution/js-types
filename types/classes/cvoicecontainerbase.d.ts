interface CVoiceContainerBase {
    readonly "EnvelopeAnalyzer": CVoiceContainerAnalysisBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerBase(ptr_or_class: string|AnySDKClass): CVoiceContainerBase;