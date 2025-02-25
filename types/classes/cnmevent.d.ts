interface CNmEvent {
    "StartTimeSeconds": number;
    "DurationSeconds": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmEvent(ptr_or_class: string|AnySDKClass): CNmEvent;