interface CVoiceContainerStaticAdditiveSynth {
    readonly "Parent": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerStaticAdditiveSynth(ptr_or_class: string|AnySDKClass): CVoiceContainerStaticAdditiveSynth;