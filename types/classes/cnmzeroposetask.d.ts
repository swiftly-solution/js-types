interface CNmZeroPoseTask {
    readonly "Parent": CNmTask;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmZeroPoseTask(ptr_or_class: string|AnySDKClass): CNmZeroPoseTask;