interface CNmTargetWarpEvent {
    "Rule": number;
    "Algorithm": number;
    readonly "Parent": CNmEvent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmTargetWarpEvent(ptr_or_class: string|AnySDKClass): CNmTargetWarpEvent;