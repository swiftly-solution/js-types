interface CNmFootEvent {
    "Phase": number;
    readonly "Parent": CNmEvent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmFootEvent(ptr_or_class: string|AnySDKClass): CNmFootEvent;