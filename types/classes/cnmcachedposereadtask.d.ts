interface CNmCachedPoseReadTask {
    readonly "Parent": CNmTask;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmCachedPoseReadTask(ptr_or_class: string|AnySDKClass): CNmCachedPoseReadTask;