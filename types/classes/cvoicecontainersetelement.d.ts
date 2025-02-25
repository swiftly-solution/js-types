interface CVoiceContainerSetElement {
    readonly "Sound": CSoundContainerReference;
    "VolumeDB": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerSetElement(ptr_or_class: string|AnySDKClass): CVoiceContainerSetElement;