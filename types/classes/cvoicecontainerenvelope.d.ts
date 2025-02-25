interface CVoiceContainerEnvelope {
    readonly "AnalysisContainer": CVoiceContainerAnalysisBase;
    readonly "Parent": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerEnvelope(ptr_or_class: string|AnySDKClass): CVoiceContainerEnvelope;