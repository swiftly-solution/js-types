interface CNmTransitionEvent {
    "Rule": number;
    readonly "Parent": CNmEvent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmTransitionEvent(ptr_or_class: string|AnySDKClass): CNmTransitionEvent;