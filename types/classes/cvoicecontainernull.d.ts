interface CVoiceContainerNull {
    readonly "Parent": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerNull(ptr_or_class: string|AnySDKClass): CVoiceContainerNull;