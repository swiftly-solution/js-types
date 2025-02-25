interface CNmOrientationWarpEvent {
    readonly "Parent": CNmEvent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmOrientationWarpEvent(ptr_or_class: string|AnySDKClass): CNmOrientationWarpEvent;