interface CNmModelSpaceBlendTask {
    readonly "Parent": CNmBlendTaskBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmModelSpaceBlendTask(ptr_or_class: string|AnySDKClass): CNmModelSpaceBlendTask;