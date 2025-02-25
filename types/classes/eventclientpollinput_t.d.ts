interface EventClientPollInput_t {
    readonly "LoopState": EngineLoopState_t;
    "RealTime": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientPollInput_t(ptr_or_class: string|AnySDKClass): EventClientPollInput_t;