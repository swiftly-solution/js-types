interface CVoiceContainerShapedNoise {
    "UseCurveForFrequency": boolean;
    "Frequency": number;
    "UseCurveForResonance": boolean;
    "Resonance": number;
    "UseCurveForAmplitude": boolean;
    "GainInDecibels": number;
    readonly "Parent": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerShapedNoise(ptr_or_class: string|AnySDKClass): CVoiceContainerShapedNoise;