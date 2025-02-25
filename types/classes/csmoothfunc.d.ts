interface CSmoothFunc {
    "SmoothAmplitude": number;
    "SmoothBias": number;
    "SmoothDuration": number;
    "SmoothRemainingTime": number;
    "SmoothDir": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSmoothFunc(ptr_or_class: string|AnySDKClass): CSmoothFunc;