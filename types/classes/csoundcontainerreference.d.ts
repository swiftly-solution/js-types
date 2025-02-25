interface CSoundContainerReference {
    "UseReference": boolean;
    readonly "Sound": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundContainerReference(ptr_or_class: string|AnySDKClass): CSoundContainerReference;