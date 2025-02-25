interface CVoiceContainerBlender {
    readonly "FirstSound": CSoundContainerReference;
    readonly "SecondSound": CSoundContainerReference;
    "BlendFactor": number;
    readonly "Parent": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoiceContainerBlender(ptr_or_class: string|AnySDKClass): CVoiceContainerBlender;