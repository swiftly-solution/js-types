interface CNmLegacyEvent {
    "AnimEventClassName": string;
    readonly "Parent": CNmEvent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmLegacyEvent(ptr_or_class: string|AnySDKClass): CNmLegacyEvent;