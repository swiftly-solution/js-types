interface CNmReferencePoseTask {
    readonly "Parent": CNmTask;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmReferencePoseTask(ptr_or_class: string|AnySDKClass): CNmReferencePoseTask;