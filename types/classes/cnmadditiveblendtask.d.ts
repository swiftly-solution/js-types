interface CNmAdditiveBlendTask {
    readonly "Parent": CNmBlendTaskBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmAdditiveBlendTask(ptr_or_class: string|AnySDKClass): CNmAdditiveBlendTask;