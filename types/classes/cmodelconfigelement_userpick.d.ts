interface CModelConfigElement_UserPick {
    readonly "Choices": Object;
    readonly "Parent": CModelConfigElement;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CModelConfigElement_UserPick(ptr_or_class: string|AnySDKClass): CModelConfigElement_UserPick;