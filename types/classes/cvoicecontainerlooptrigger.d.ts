interface CVoiceContainerLoopTrigger {
    readonly "Sound": CSoundContainerReference;
    "RetriggerTimeMin": number;
    "RetriggerTimeMax": number;
    "FadeTime": number;
    "CrossFade": boolean;
    readonly "Parent": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerLoopTrigger(ptr_or_class: string|AnySDKClass): CVoiceContainerLoopTrigger;