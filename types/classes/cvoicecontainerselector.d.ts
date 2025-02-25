interface CVoiceContainerSelector {
    "Mode": number;
    readonly "SoundsToPlay": CSoundContainerReferenceArray;
    readonly "ProbabilityWeights": Object;
    readonly "Parent": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerSelector(ptr_or_class: string|AnySDKClass): CVoiceContainerSelector;