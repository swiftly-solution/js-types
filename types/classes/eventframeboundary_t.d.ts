interface EventFrameBoundary_t {
    "FrameTime": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventFrameBoundary_t(ptr_or_class: string|AnySDKClass): EventFrameBoundary_t;