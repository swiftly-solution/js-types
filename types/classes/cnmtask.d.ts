interface CNmTask {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmTask(ptr_or_class: string|AnySDKClass): CNmTask;