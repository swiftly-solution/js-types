interface CTestBlendContainer {
    readonly "Parent": CVoiceContainerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTestBlendContainer(ptr_or_class: string|AnySDKClass): CTestBlendContainer;