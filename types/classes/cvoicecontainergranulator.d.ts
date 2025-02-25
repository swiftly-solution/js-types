interface CVoiceContainerGranulator {
    "GrainLength": number;
    "GrainCrossfadeAmount": number;
    "StartJitter": number;
    "PlaybackJitter": number;
    readonly "Parent": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerGranulator(ptr_or_class: string|AnySDKClass): CVoiceContainerGranulator;