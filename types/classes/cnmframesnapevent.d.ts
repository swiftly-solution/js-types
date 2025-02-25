interface CNmFrameSnapEvent {
    "FrameSnapMode": number;
    readonly "Parent": CNmEvent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmFrameSnapEvent(ptr_or_class: string|AnySDKClass): CNmFrameSnapEvent;