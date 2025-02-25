interface CNmCachedPoseWriteTask {
    readonly "Parent": CNmTask;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmCachedPoseWriteTask(ptr_or_class: string|AnySDKClass): CNmCachedPoseWriteTask;