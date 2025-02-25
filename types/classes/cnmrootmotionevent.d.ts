interface CNmRootMotionEvent {
    "BlendTimeSeconds": number;
    readonly "Parent": CNmEvent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmRootMotionEvent(ptr_or_class: string|AnySDKClass): CNmRootMotionEvent;