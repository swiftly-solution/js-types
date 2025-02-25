interface EventClientProcessInput_t {
    readonly "LoopState": EngineLoopState_t;
    "RealTime": number;
    "TickInterval": number;
    "TickStartTime": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientProcessInput_t(ptr_or_class: string|AnySDKClass): EventClientProcessInput_t;