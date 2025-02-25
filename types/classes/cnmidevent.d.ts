interface CNmIDEvent {
    readonly "Parent": CNmEvent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmIDEvent(ptr_or_class: string|AnySDKClass): CNmIDEvent;