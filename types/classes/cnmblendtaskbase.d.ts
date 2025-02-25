interface CNmBlendTaskBase {
    readonly "Parent": CNmTask;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmBlendTaskBase(ptr_or_class: string|AnySDKClass): CNmBlendTaskBase;