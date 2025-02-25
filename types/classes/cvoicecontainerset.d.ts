interface CVoiceContainerSet {
    readonly "SoundsToPlay": Object;
    readonly "Parent": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerSet(ptr_or_class: string|AnySDKClass): CVoiceContainerSet;