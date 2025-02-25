interface EventClientProcessGameInput_t {
    readonly "LoopState": EngineLoopState_t;
    "RealTime": number;
    "FrameTime": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientProcessGameInput_t(ptr_or_class: string|AnySDKClass): EventClientProcessGameInput_t;