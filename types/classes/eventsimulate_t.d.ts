interface EventSimulate_t {
    readonly "LoopState": EngineLoopState_t;
    "FirstTick": boolean;
    "LastTick": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventSimulate_t(ptr_or_class: string|AnySDKClass): EventSimulate_t;