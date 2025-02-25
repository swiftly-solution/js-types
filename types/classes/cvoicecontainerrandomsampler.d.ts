interface CVoiceContainerRandomSampler {
    "Amplitude": number;
    "AmplitudeJitter": number;
    "TimeJitter": number;
    "MaxLength": number;
    "NumDelayVariations": number;
    readonly "Parent": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerRandomSampler(ptr_or_class: string|AnySDKClass): CVoiceContainerRandomSampler;