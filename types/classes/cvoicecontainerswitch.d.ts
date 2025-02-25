interface CVoiceContainerSwitch {
    readonly "SoundsToPlay": Object;
    readonly "Parent": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerSwitch(ptr_or_class: string|AnySDKClass): CVoiceContainerSwitch;