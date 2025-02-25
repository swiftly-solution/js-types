interface EventClientFrameSimulate_t {
    readonly "LoopState": EngineLoopState_t;
    "RealTime": number;
    "FrameTime": number;
    "ScheduleSendTickPacket": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EventClientFrameSimulate_t(ptr_or_class: string|AnySDKClass): EventClientFrameSimulate_t;