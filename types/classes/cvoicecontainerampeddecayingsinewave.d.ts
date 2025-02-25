interface CVoiceContainerAmpedDecayingSineWave {
    "GainAmount": number;
    readonly "Parent": CVoiceContainerDecayingSineWave;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerAmpedDecayingSineWave(ptr_or_class: string|AnySDKClass): CVoiceContainerAmpedDecayingSineWave;