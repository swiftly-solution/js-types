interface CNmSampleTask {
    readonly "Parent": CNmTask;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmSampleTask(ptr_or_class: string|AnySDKClass): CNmSampleTask;