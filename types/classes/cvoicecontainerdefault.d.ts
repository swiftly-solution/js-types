interface CVoiceContainerDefault {
    readonly "Parent": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerDefault(ptr_or_class: string|AnySDKClass): CVoiceContainerDefault;