interface CAudioSentence {
    "ShouldVoiceDuck": boolean;
    readonly "RunTimePhonemes": Object;
    readonly "EmphasisSamples": Object;
    readonly "MorphData": CAudioMorphData;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAudioSentence(ptr_or_class: string|AnySDKClass): CAudioSentence;