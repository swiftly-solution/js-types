interface CNmBlendTask {
    readonly "Parent": CNmBlendTaskBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmBlendTask(ptr_or_class: string|AnySDKClass): CNmBlendTask;