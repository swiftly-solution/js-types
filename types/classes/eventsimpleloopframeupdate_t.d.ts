interface EventSimpleLoopFrameUpdate_t {
    readonly "LoopState": EngineLoopState_t;
    "RealTime": number;
    "FrameTime": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventSimpleLoopFrameUpdate_t(ptr_or_class: string|AnySDKClass): EventSimpleLoopFrameUpdate_t;