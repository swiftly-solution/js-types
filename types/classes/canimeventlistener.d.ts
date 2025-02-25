interface CAnimEventListener {
    readonly "Parent": CAnimEventListenerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimEventListener(ptr_or_class: string|AnySDKClass): CAnimEventListener;