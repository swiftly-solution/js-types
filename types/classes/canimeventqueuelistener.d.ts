interface CAnimEventQueueListener {
    readonly "Parent": CAnimEventListenerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimEventQueueListener(ptr_or_class: string|AnySDKClass): CAnimEventQueueListener;