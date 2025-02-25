interface CNmOverlayBlendTask {
    readonly "Parent": CNmBlendTaskBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmOverlayBlendTask(ptr_or_class: string|AnySDKClass): CNmOverlayBlendTask;