interface CVoiceContainerDecayingSineWave {
    "Frequency": number;
    "DecayTime": number;
    readonly "Parent": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerDecayingSineWave(ptr_or_class: string|AnySDKClass): CVoiceContainerDecayingSineWave;